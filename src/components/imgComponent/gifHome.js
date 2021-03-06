import '../../App.css'

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

const gifResult = ({ gif }) => {
  return gif.map((img) => {
    return (
      img !== undefined && (
        <div class="result-wrapper">
          <img src={img.images.fixed_width.url} alt={img.title}/>
          <p>Title : {img.title}</p>
        </div>
      )
    );
  });
}

export default gifResult;