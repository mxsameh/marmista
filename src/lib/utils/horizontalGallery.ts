
import gsap from "gsap"

const positionImages = (imageWidth : number, rowKey : string) : void =>
{
  gsap.set(`[data-row='${rowKey}'] .image`,
  {
    x : (i) => imageWidth * (-1 + i)
  })
}

const loopImages = (imageWidth : number , imagesLength : number, rowKey : string, duration: number) : void =>
{
  const galleryWraperWidth = imagesLength * imageWidth

  gsap.to(`[data-row='${rowKey}'] .image`,{
    duration : duration,
    repeat : -1,
    ease : 'none',
    x :`+=${galleryWraperWidth}`,
    modifiers : {
      x : gsap.utils.unitize((x) =>
       gsap.utils.wrap(-imageWidth, (imagesLength -1) * imageWidth, parseFloat(x))
      )
    }
  })

}

const createHorizontalGallery = (imageWidth : number, imagesLength : number, rowKey: string, duration: number) =>
{
  positionImages(imageWidth, rowKey);
  loopImages(imageWidth, imagesLength, rowKey, duration);
}

export {createHorizontalGallery}