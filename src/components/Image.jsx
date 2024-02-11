const Image = ({ url }) => {
  return (
    <div className="z-10 overflow-hidden rounded-xl">
      <img
        className="h-auto max-w-full transition duration-300 ease-in-out hover:scale-110"
        src={url}
        alt="No Image"
      />
    </div>
  );
};

export default Image;
