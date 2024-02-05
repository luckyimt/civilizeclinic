import music from '../assets/audio/music.mp3';
const Audio = () => {

    return (

        <>
            <audio controls autoplay loop >
                <source src={music} type="audio/mpeg"></source>
            </audio>
        </>
    )
}
export default Audio