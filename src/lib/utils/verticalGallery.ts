import gsap from 'gsap';

const positionImages = (imageHeight : number, colKey : string) : void =>
{
  gsap.set(`[data-col='${colKey}'] .image`,
  {
    y : (i) => imageHeight * (-1 + i)
  })
}

const loopImages = (imageHeight : number, imagesLength : number, colKey : string, duration : number) : void =>
{
  const galleryWraperHeight = imagesLength * imageHeight;

  gsap.to(`[data-col='${colKey}'] .image`,
  {
    duration,
    repeat : -1,
    ease : 'none',
    y : `-=${imagesLength*imageHeight}`,
    modifiers:{
      y : gsap.utils.unitize((y) =>
        gsap.utils.wrap(-imageHeight, (imagesLength-1)*imageHeight, parseFloat(y))
      )
    }
  })

}

const createVerticalGal = (imageHeight : number, imagesLength : number, colKey: string, duration:number) =>
{
  positionImages(imageHeight, colKey);
  loopImages(imageHeight, imagesLength, colKey, duration)
}
export {createVerticalGal}