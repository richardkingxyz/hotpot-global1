/**
 * If images are stored in Google's servers, optimize
 * their size to reduce load time
 * @param imageHref An image url
 * @param width Desired image width
 * @returns The same image with an additional query param to resize it
 */
export function optimizeImage(imageHref: string | undefined, width: number) {
  if (!imageHref) return ''

  // const w =
  //   innerWidth < 639
  //     ? obj.sm
  //     : innerWidth < 767
  //     ? obj.md
  //     : innerWidth < 1023
  //     ? obj.lg
  //     : innerWidth < 1279
  //     ? obj.xl
  //     : obj['2xl']

  let url: URL | null = null
  try {
    url = new URL(imageHref)
  } catch (error) {
    console.error('Invalid imageHref:', imageHref)
    return imageHref
  }
  // Optimize Google images
  if (url.host === 'lh3.googleusercontent.com') {
    if (imageHref.includes('=s') || imageHref.includes('=w')) {
      let newImage = imageHref.split('=')
      return `${newImage[0]}=w${width}`
    }
    return `${imageHref}=w${width}`
  }

  return imageHref
}
