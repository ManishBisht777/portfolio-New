import React from "react";

import tool from "../../assets/tool.png";

const Skill = () => {
  return (
    <section className="skills">
      <h2 className="boxheading">
        <img src={tool} alt="tools and skills" /> skills and tools
      </h2>

      <div className="skillbx">
        <div className="skillimg">
          <img
            src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468176/languages/html-5_aed99c.png"
            alt=""
          />
        </div>

        <div className="skillimg">
          <img
            src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468851/languages/redux-seeklogo.com_sjpa6n.svg"
            alt=""
          />
        </div>
        <div className="skillimg">
          <img
            src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468177/languages/nodejs_nbcofr.png"
            alt=""
          />
        </div>
        <div className="skillimg">
          <img
            src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660469022/languages/next-js-seeklogo.com_xzp1dj.svg"
            alt=""
          />
        </div>
        <div className="skillimg">
          <img
            src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468175/languages/c-_jbinui.png"
            alt=""
          />
        </div>
        <div className="skillimg">
          <img
            src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468182/languages/structure_bvdkl2.png"
            alt=""
          />
        </div>
        <div className="skillimg">
          <img
            src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468178/languages/js_ejooe1.png"
            alt=""
          />
        </div>
        <div className="skillimg">
          <img
            src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468175/languages/css_z5upro.png"
            alt=""
          />
        </div>
        <div className="skillimg">
          <img
            src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660469243/languages/shopify_gqdr0g.png"
            alt=""
          />
        </div>
        <div className="skillimg">
          <img
            src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660469251/languages/git_da6bou.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Skill;
