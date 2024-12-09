const Members = () => {
  const spaceSlug = "start-here"; // Replace with your actual space slug
  return (
    <div>
      <iframe
        style={{ border: 0, boxShadow: "none", width: "800px", height: "80vh" }}
        src={`https://mahmuds-community-085247.circle.so/c/${spaceSlug}?iframe=true`}
      ></iframe>
    </div>
  );
};

export default Members;
