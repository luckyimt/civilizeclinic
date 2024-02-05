const Blog = () => {
  return (
    <section id="products">
      
      <div className="blog__area">
      <div className="blog__headline">
          <h1>CIVILIZE-QUALIFIED<br></br><center>CASES</center></h1>
        </div>

        <div className="blog__container">
          <article className="blog__card">
            <center>
                <img src="./media/blog/5.png" alt="" className="blog__img" />
            </center>     
            <div className="blog__box">
          <div className="blog__title"><h1>เสริมจมูก ศิวิไลคลินิก</h1></div>
          <div className="blog__description"><h1>ตามหลักโหงวเฮ้งและองศาที่ถูกต้อง</h1></div>
          </div>
            </article>
          <article className="blog__card">
              <center>

                  <img src="./media/blog/3.png" alt="" className="blog__img" />
              </center>
              <div className="blog__box">
              <div className="blog__title">
                <h1>จมูกโด่งพุ่ง ได้ใน15นาที  </h1>
              </div>
                <div className="blog__description"><h1>เนื้อน้อยโด่งพุ่งได้ เสริมจมูกไร้ซิลิโคน เริ่มต้น 3,788.-</h1></div>
                </div>
              
            </article>
          <article className="blog__card">
          <center>

              <img src="./media/blog/1.png" alt="" className="blog__img"/>

          </center>
          <div className="blog__box">

            <div className="blog__title">
              <h1>ศัลยกรรมจมูก </h1>
            </div>
            
            <div className="blog__description"><h1>เสริมจมูก แก้จมูกศัลยกรรม เริ่มต้น 9,999.-</h1></div>
            </div>
            </article>
            <article className="blog__card">
              <center>

                  <img src="./media/blog/3.jpg" alt="" className="blog__img" />

              </center>
              <div className="blog__box">
                <div className="blog__title">
            <h1>ปวดหลัง คอ บ่า ไหล่
                              </h1>
          </div>
          <div className="blog__description"><h1>เราช่วยได้ หยุดปวดใน 5 นาที</h1></div>
          </div>
            </article>
        </div>
        </div>
        </section>
    )
}
export default Blog