import React  from "react"
// import {Zoom} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import image1 from './images/image1.jfif';
// import image2 from './images/image2.jfif';
import Nav from "./Nav/Nav";
// const images = [
//     image1,
//     image2
//   ];
  
  // const Slideshow = () => {
  //     return (
  //       <div className="slide-container" >
  //         <Zoom scale={0.4}>
  //           {
  //             images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
  //           }
  //         </Zoom>
  //       </div>
  //     )
  // }
  const NewHome=()=>{
      return(
          <>
          <Nav></Nav>
          <img src="https://media.istockphoto.com/id/1370740507/photo/global-business-logistics-import-export-and-container-cargo-freight-ship-airplane-container.jpg?b=1&s=170667a&w=0&k=20&c=dScdEfq60ouPOOrrUVCIm0iHRw-2wnBnVHSmNw9xwyk=" alt="noimg" style={{width:"100%"}}/>
              {/* <Slideshow ></Slideshow> */}
          </>
      )
  }
  export default NewHome