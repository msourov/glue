import {
  Card,
  Text,
  Group,
  Container,
  Button,
  Modal,
  TextInput,
  Title,
  Box,
  PasswordInput,
} from "@mantine/core";

import useLocalStorage from "../../services/hooks/useLocalStorage";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useForm } from "react-hook-form";

interface UserProfileData {
  uid: string;
  name: string;
  phone: string;
  email: string;
}
interface LSData {
  uid: string;
}

interface EditProfileFormProps {
  userData: UserProfileData;
  onSubmit: () => void;
}

const UserProfile = () => {
  const [LSData] = useLocalStorage<string | Record<string, unknown>>(
    "loggedInUser",
    null
  );
  const [profileData, setProfileData] = useState<UserProfileData | null>(null);
  // const [imageUrl, setImageUrl] = useState<string>("");
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const { uid } = LSData as unknown as LSData;
  const [timestamp, setTimestamp] = useState<number>(Date.now());

  const getProfileData = async () => {
    if (!uid) return;
    try {
      const profileData = await api().get(`/margaret/v1/user/${uid}`);
      setProfileData(profileData.data.data);
      // setImageUrl(
      //   `https://api.glue.pitetris.com/margaret/v1/user/profile/show/no/${uid}?${timestamp}`
      // );
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProfileData();
  }, [timestamp]);

  // const handleModalOpen = () => {
  //   setEditModalOpen((prev) => !prev);
  // };

  const handleModalClose = () => {
    setEditModalOpen(false);
    setTimestamp(Date.now());
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      console.error("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("upload_file", file);

    try {
      await api().post(`/margaret/v1/user/profile/upload/${uid}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setTimestamp(Date.now()); // Refresh profile data after successful upload
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  const imageUrl = `https://api.glue.pitetris.com/margaret/v1/user/profile/show/no/${uid}?${timestamp}`;

  return (
    <Box my={20} className="w-[95%] mx-auto">
      <Box className="my-4">
        <Title order={2} fw={500}>
          My Profile
        </Title>
        <Text c="dimmed">Change your information and preferences</Text>
      </Box>
      <Card className="rounded-md border shadow-md my-6 px-6">
        <Box className="gap-8 flex items-center">
          <img
            src={imageUrl}
            alt={profileData?.name}
            className="w-24 h-24 rounded-full"
          />
          <Box className="flex flex-col gap-2">
            <Text fw={500} c="dimmed">
              Profile Picture
            </Text>
            <Group>
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => handleImageUpload(e)}
              />
              <Button
                size="compact-sm"
                variant="filled"
                color="black"
                className="font-thin"
                onClick={() => document.getElementById("fileInput")?.click()}
              >
                Upload Image
              </Button>
              <Button
                size="compact-sm"
                variant="outline"
                color="gray"
                className="font-thin"
              >
                Remove
              </Button>
            </Group>
          </Box>
        </Box>

        <div className="text-left mt-8 mb-4 flex flex-col gap-4">
          <Group>
            <TextInput
              value={profileData?.name || ""}
              label={
                <Text size="sm" c="dimmed">
                  Full Name
                </Text>
              }
              w={220}
            />
            <TextInput
              value={profileData?.email || ""}
              label={
                <Text size="sm" c="dimmed">
                  Email Address
                </Text>
              }
              w={220}
            />
          </Group>
          <Group>
            <PasswordInput
              value="11111111"
              label={
                <Text size="sm" c="dimmed">
                  New Password
                </Text>
              }
              w={220}
            />
            <PasswordInput
              value="11111111"
              label={
                <Text size="sm" c="dimmed">
                  Confirm Password
                </Text>
              }
              w={220}
            />
          </Group>
          <Button
            variant="filled"
            color="black"
            className="w-fit font-thin mt-4"
          >
            Change password
          </Button>
        </div>
      </Card>
      <Box className="w-full py-6 px-6 bg-red-100">
        <Text mb={"1rem"}>
          <Text span color="red" fw="bold">
            Careful!
          </Text>{" "}
          This action is irreversible.
        </Text>
        <Button variant="filled" className="w-fit font-thin bg-red-700">
          Delete account
        </Button>
      </Box>
      <Modal
        opened={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        // title="Edit Profile"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {profileData && (
          <EditProfileForm userData={profileData} onSubmit={handleModalClose} />
        )}
      </Modal>
    </Box>
  );
};

export default UserProfile;

const EditProfileForm: React.FC<EditProfileFormProps> = ({
  userData,
  onSubmit,
}) => {
  const [image, setImage] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserProfileData>({
    // resolver: yupResolver(validationSchema),
    defaultValues: userData,
  });

  useEffect(() => {
    if (userData) {
      setValue("name", userData.name);
      setValue("phone", userData.phone);
    }
  }, [userData, setValue]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    file && setImage(file);
  };

  const handleUpdateProfile = async ({ name, phone }: UserProfileData) => {
    const formData = new FormData();
    if (image) {
      formData.append("upload_file", image);
    }
    try {
      await api().put("/margaret/v1/user/update", {
        uid: userData.uid,
        name,
        phone,
      });
      if (image) {
        await api().post(
          `/margaret/v1/user/profile/upload/${userData.uid}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }
      onSubmit();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container size="xs" className="mb-8">
      <Title order={3} mb="sm" className="text-center">
        Edit Profile
      </Title>
      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <TextInput
          label="Name"
          placeholder="Your name"
          {...register("name")}
          error={errors.name ? errors.name.message : null}
        />
        <TextInput
          label="Phone"
          placeholder="123-45-678"
          {...register("phone")}
          error={errors.phone ? errors.phone.message : null}
        />
        <div
          className="mt-1 mb-8 flex flex-col"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize: "0.9rem",
            marginBlock: "0.5rem",
          }}
        >
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <Group gap="md" mt="md">
          <Button variant="outline" type="submit">
            Update Profile
          </Button>
          {/* <Button color="red" onClick={() => form.reset()}>
            Reset
          </Button> */}
        </Group>
      </form>
    </Container>
  );
};
