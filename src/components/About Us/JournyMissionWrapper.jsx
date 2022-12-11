import { vmealsAboutUs } from "../../../src/lib/APICommunications"
import dynamic from "next/dynamic"
const Journy = dynamic(() => import("./journy"))
const Mission = dynamic(() => import("./Mission"))
export default function JournyMissionWrapper({ ourCompanyData }) {
    return (
        <>
            <Journy ourCompanyData={ourCompanyData} />
            <Mission ourCompanyData={ourCompanyData} />
        </>
    )
}

export async function getServerSideProps() {
    try {
        let ourCompanyData = await fetch(vmealsAboutUs)
        ourCompanyData = await ourCompanyData.json()
        return {
            props: { ourCompanyData: { ...ourCompanyData?.docs } }, // will be passed to the page component as props
        }
    } catch (error) {
        return {
            props: { ourCompanyData: {} }
        }
    }

}