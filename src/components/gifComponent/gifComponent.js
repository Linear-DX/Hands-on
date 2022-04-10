import './img.css';

// const Result = () => {
//   const loop = data.map((img) => {
//     return (
//       img.rating === "g" && (
//         <div>
//           <img src={img.url} />
//           <p>Rating : {img.rating}</p>
//         </div>
//       )
//     );  
//   });
//   return loop;
// }

const GifComponent = ({ gifs }) => {
  console.log(gifs)
  return gifs.map((img) => {
    return (
      img !== undefined && (
        <div className="result-wrapper">
          <img src={img.images.fixed_width.url} alt={img.title} />
          <p>Title : {img.title}</p>
        </div>
      )
    );
  });
}

export default GifComponent;