import {
  Card,
  Text,
  Group,
  Container,
  Button,
  Divider,
  Modal,
  TextInput,
  Title,
} from "@mantine/core";

import useLocalStorage from "../services/hooks/useLocalStorage";
import { useEffect, useState } from "react";
import api from "../services/api";
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
  const [imageUrl, setImageUrl] = useState<string>("");
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const { uid } = LSData as unknown as LSData;
  const [timestamp, setTimestamp] = useState<number>(Date.now());

  const getProfileData = async () => {
    if (!uid) return;
    try {
      const profileData = await api().get(`/margaret/v1/user/${uid}`);
      setProfileData(profileData.data.data);
      setImageUrl(
        `https://api.glue.pitetris.com/margaret/v1/user/profile/show/no/${uid}?${timestamp}`
      );
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProfileData();
  }, [timestamp]);

  const handleModalOpen = () => {
    setEditModalOpen((prev) => !prev);
  };

  const handleModalClose = () => {
    setEditModalOpen(false);
    setTimestamp(Date.now());
  };

  return (
    <Container size={"100%"} my={20}>
      <Card className="p-8 rounded-md shadow-md">
        <Group className="flex gap-20 align-middle my-10">
          <img
            src={imageUrl}
            alt={profileData?.name}
            className="w-48 h-48 rounded-full mb-4"
          />

          <div className="text-left mb-4">
            <Text className="font-bold text-2xl">{profileData?.name}</Text>
            <Divider my="md" />
            <Text className="text-lg text-gray-600 ">
              Phone:{" "}
              <span className="text-black text-xl">{profileData?.phone}</span>
            </Text>
            <Text className="text-lg text-gray-600 ">
              Email:{" "}
              <span className="text-black text-xl">{profileData?.email}</span>
            </Text>
          </div>
        </Group>

        <Group align="center" gap="md">
          <Button variant="outline" onClick={handleModalOpen}>
            Edit Profile
          </Button>
          {/* <Button color="red">Delete Profile</Button> */}
        </Group>
      </Card>
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
    </Container>
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
    <Container size="xs" className="mb-10">
      <Title order={2} mb="md" className="text-center">
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
