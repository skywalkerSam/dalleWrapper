import "./ImageDisplay.css";

interface Props {
  imageUrl: string;
}

const ImageDisplay: React.FC<Props> = ({ imageUrl }) => {
  return (
    <>
      <div className="mt3 mb6">
        <img src={imageUrl} alt="" width="auto" />
        {/* {console.log(imageUrl)} */}
      </div>
    </>
  );
};

export default ImageDisplay;
