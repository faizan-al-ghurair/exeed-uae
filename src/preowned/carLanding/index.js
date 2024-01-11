import { Header } from "../../home/header";
import { Footer } from "../../home/section6";
import {SideBar} from "./sidebar";
import {MainSection} from './main'

export const CarLanding = () => {
    return(
        <>
            <Header />
                <div className="ms-5 me-5 mobile-mr-0">
                    <div className="row mt-4">
                        <div className="col-md-3">
                            <SideBar />
                        </div>
                        <div className="col-md-9">
                            <MainSection />
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}