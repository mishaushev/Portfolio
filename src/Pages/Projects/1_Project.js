import React, { useEffect, Image } from "react";
import { Col, Row,  } from "reactstrap";
import firebaseConfig from "../firebase"
import { getStorage, ref, getDownloadURL } from 'firebase/storage'


//Project "Cotton Candy" 2021
function Project1() {      
    const [url, setUrl] = useState();

    useEffect(() => {
        const func = async () => {
            const storage = getStorage();
            const reference = ref(storage, '/1Firegirl.jpg')
            await getDownloadURL(reference).then((x) => {
                setUrl(x);
            }) 
        }
    })

    return ( 
            <div>
                <h1>Fire Girl</h1>
                    <p>Firegirl digs her energy from raw life. She is exhilarated in creating and supporting life. She 
                        lets life strive. Her personalized digital garment represents her positive energy to let the 
                        circle of life spin round and round with every coming and going generation. As she is the master of 
                        life creating, she is also its best destructor. If you interact poorly with her (e.g. with 
                        false intentions and vicious desires) she, Firegirl, can bring enormous destruction, horror, and 
                        death. Stay calm and breathe, as her flames gently sparkle in the night. Sun, arise!</p>
            </div>,
            <div>
                <Row>
                    <Col> 
                            <Image 
                            source={{ uri: url}} 
                            />
                    </Col>
                    <Col> 1 of 2</Col>
                </Row>
            </div>
        );
    }

export default Project1;