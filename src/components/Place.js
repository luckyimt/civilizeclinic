import { useState } from 'react'
import data from '../json/data.json'
import { motion } from "framer-motion";

const Place = () => {
    const [selectedImage] = useState(data.catalogs[0].imageUrl);
    return (
      <section id="place">
        <div className="place__container">
          <article>
            <div className="place__heading"><h1>เสริมจมูก</h1></div>
              <div className="place__title">
                <h1>ดารานักร้องนักแสดงนางแบบอีกมากมาย
                
                </h1>
              </div>
              <br></br>
             
           
            <div className="place__box">

            <div className="place__description">
                <h1>เข้ามาดูได้ที่คลินิกนะคะรีวิวเสริมจมูก ดารานักร้องนักแสดงนางแบบอีกมากมาย
                เข้ามาดูได้ที่คลินิกนะคะรีวิวเสริมจมูก ดารานักร้องนักแสดงนางแบบอีกมากมาย
                เข้ามาดูได้ที่คลินิกนะคะรีวิวเสริมจมูก ดารานักร้องนักแสดงนางแบบอีกมากมาย
                เข้ามาดูได้ที่คลินิกนะคะรีวิวเสริมจมูก ดารานักร้องนักแสดงนางแบบอีกมากมาย
                เข้ามาดูได้ที่คลินิกนะคะรีวิวเสริมจมูก ดารานักร้องนักแสดงนางแบบอีกมากมาย
                เข้ามาดูได้ที่คลินิกนะคะ
                </h1>
              </div>

              <div className="place__img-big">
                <img
                  src={selectedImage}
                  alt=""
                  className="image"
                  />
          </div>

              </div>
              <div>
              <motion.div className="place__subtitle" animate={{ rotate: [0, 360] }}
      transition={{ duration: 180, loop: Infinity }}>
                  </motion.div>
                  </div>
        </article>
      </div>
    </section>
    )
}
export default Place