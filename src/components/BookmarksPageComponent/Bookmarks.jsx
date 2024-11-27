import { Helmet } from "react-helmet-async";
import HeroSvg from "../HomeComponent/heroSvg";
import BookmarkCardsSection from "./BookmarkCardsSection";

const Bookmarks = () => {
    return (
        <main className="space-y-20">
            <Helmet>
                <title>
                    Bookmarks | Discount PRO
                </title>
            </Helmet>

            <header className="bg-[#05858E]">
                <div className="container min-h-80 rounded-md flex justify-center items-center text-center relative overflow-hidden">
                    <div className="sectionHeaderWidth text-white">
                        <h1 className="font-bold text-white">Your Bookmarks</h1>
                        <p className="text-[clamp(1rem,0.8628318584070797rem+0.7079646017699115vw,1.5rem)]">Keep track of your favorite brands and never miss out on the best deals!</p>
                    </div>
                    <HeroSvg/>
                </div>
            </header>
            <BookmarkCardsSection/>
        </main>
    );
};

export default Bookmarks;