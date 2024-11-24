
const FaqSection = () => {
    const AllFaq=[
        {
            faqQ:"What is Discount PRO?",
            faqA:"Discount PRO is a platform that collects and organizes discount coupons from popular e-commerce stores in Bangladesh to help you save money effortlessly."
        },
                {
            faqQ:"How do I use a coupon?",
            faqA:"Browse the available coupons, copy the code with one click, and paste it at the checkout page of the respective e-commerce store to enjoy the discount."
        },
        {
            faqQ:"Is Discount PRO free to use?",
            faqA:"Yes, Discount PRO is completely free for all users."
        },
        {
            faqQ:"How do I log in to the application?",
            faqA:"You can log in or sign up using your email or Google account through our secure Firebase Authentication system."
        },
        {
            faqQ:"Are the coupons verified and up-to-date?",
            faqA:"Yes, our team ensures that all coupons are verified and regularly updated for your convenience."
        },
        {
            faqQ:"Can I save coupons for later?",
            faqA:"Absolutely! You can save coupons to your favorites and access them anytime from your profile."
        },
        {
            faqQ:"What happens if a coupon doesn't work?",
            faqA:"Some coupons have specific terms or expiration dates. If one doesn't work, check the conditions or let us know through the feedback section."
        },
        {
            faqQ:"Do I need an account to browse coupons?",
            faqA:"No, you can browse without logging in, but features like getting coupons and accessing personalized offers require an account."
        },

    ]
    return (
        <section>
            <div className="container space-y-10">
                <h3 className="mx-auto text-center">
                    Frequently Asked Questions
                </h3>
                <div className="">
                    {
                        AllFaq.map((faq,index)=>(
                            <div key={index} className="collapse collapse-plus border-b-2 border-custom-half-primary text-custom-primary rounded-none py-3 md:py-6 lg:py-8">
                                <input type="radio" name="my-accordion-3" defaultChecked={index===0} />
                                <div className="collapse-title text-xl font-medium"><h6 className="">{faq.faqQ}</h6></div>
                                <div className="collapse-content">
                                    <p className="text">{faq.faqA}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default FaqSection;