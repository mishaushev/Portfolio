//import React, { useEffect, useState } from "react";
//import { Col, Row,  } from "reactstrap";
import React from "react"
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
//import "../index.css"
//const ImageUrl = "gs://portfolio-546b9.appspot.com/Project (Cotton Candy)/1Firegirl.gif"


//Project "Cotton Candy" 2021
function Box() {
    return(
        <mesh>
            <BufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    );
}
export default function Project1() {
    return (
        <Canvas>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <Box />
        </Canvas>
    )
}

/*    const [url, setUrl] = useState();

    useEffect(() => {
        const func = async () => {
            const storage = getStorage();
            const reference = ref(storage, '/1Firegirl.jpg')
            await getDownloadURL(reference).then((x) => {
                setUrl(x);
            }) 
        }
    })
*/

    /*    const [img, setImg] = useState();
      
        const fetchImage = async () => {
          const res = await fetch(ImageUrl);
          const imageBlob = await res.blob();
          const imageObjectURL = URL.createObjectURL(imageBlob);
          setImg(imageObjectURL);
        };
      
        useEffect(() => {
          fetchImage();
        }, []);

    return ( 
            <div>
                <h1>Fire Girl</h1>
                    <p>Firegirl digs her energy from raw life. She is exhilarated in creating and supporting life. She 
                        lets life strive. Her personalized digital garment represents her positive energy to let the 
                        circle of life spin round and round with every coming and going generation. As she is the master of 
                        life creating, she is also its best destructor. If you interact poorly with her (e.g. with 
                        false intentions and vicious desires) she, Firegirl, can bring enormous destruction, horror, and 
                        death. Stay calm and breathe, as her flames gently sparkle in the night. Sun, arise!</p>
                        <Row>
                    <Col> 
                        <img src={img} alt="icons"/>
                    </Col>
                    <Col> 1 of 2</Col>
                </Row>
            </div>
        );*/