import React from "react";
import Heading from "../HomeComp/Heading/Heading";
import WhyLR from "./WhyLR";
import WhyRL from "./WhyRL";

const WhyUs = () => {
  return (
    <section className="section">
      <Heading
        headtext={"Why Coding Decoded?"}
        subhead={
          "We believe in our audience and would value them the most. Your support is our biggest assets"
        }
      />
      <WhyLR
        number={"01"}
        title={"Data Structures"}
        text={
          "A strong understanding of data structures allows candidates to solve complex problems and demonstrate their ability to write efficient code. We have detailed step by step detailed videos to build DSA concepts "
        }
      />
      <WhyRL
        number={"02"}
        title={"Low Level System Design"}
        text={
          "Protect your content from unauthorized use and plagiarism with regular scans. Stay ahead of the rapid creation of new content by automatically monitoring and safeguarding your work. Gain peace of mind knowing that your content is secure and protected against unlawful duplication, ensuring its integrity and originality."
        }
      />
      <WhyLR
        number={"03"}
        title={"Enhance your technical skills"}
        text={
          "Protect your content from unauthorized use and plagiarism with regular scans. Stay ahead of the rapid creation of new content by automatically monitoring and safeguarding your work. Gain peace of mind knowing that your content is secure and protected against unlawful duplication, ensuring its integrity and originality."
        }
      />
      <WhyRL
        number={"04"}
        title={"Strongest referral community"}
        text={
          "Protect your content from unauthorized use and plagiarism with regular scans. Stay ahead of the rapid creation of new content by automatically monitoring and safeguarding your work. Gain peace of mind knowing that your content is secure and protected against unlawful duplication, ensuring its integrity and originality."
        }
      />
    </section>
  );
};

export default WhyUs;
