import "./ImageDisplay.css";

interface Props {
  imageUrl: string;
}

const ImageDisplay: React.FC<Props> = ({ imageUrl }) => {
  return (
    <>
      <div className="tl ml3 red">
        <p>*Explicit Content. Viewer discretion is advised...</p>
      </div>
      <div className="mt4 mb6">
        <img src={imageUrl} alt="" width="auto" />
        {/* {console.log(imageUrl)} */}
      </div>
    </>
  );
};

export default ImageDisplay;
