import Fotter from "../Common/Footer"
import Navbar from "../Common/Navbar"

const FourZeroFourDetail = ({ headerData, socialMediaIcon, footerData, tradeMarkData }) => {
    return (
        <>
            <Navbar headerData={headerData} />
            <div className=' fourzerofou-img ' >
                <img src='/images/404-error-with-a-cute-animal-cartoon-illustrations-png.png' />
            </div>
            <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData} />
        </>
    )
}

export default FourZeroFourDetail