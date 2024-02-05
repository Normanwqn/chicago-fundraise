import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import signature_eng from "../asset/signature_eng.png"
import banner from "../asset/banner.webp"
import '../style/Article.css'

function Article() {
  return (
      <div className="container">
        <div className={'row mb-3'}>
          <img src={banner} className={'img-responsive signature'}
               alt={'2024 Spring Break Chicago Missions'}/>
        </div>
        <div className="row">
          {/*<div className="col">*/}
          <p>Dear family and friends,</p>
        {/*</div>*/}
        {/*<div className="row">*/}
            <p className={"fw-normal"}>Thank you for your kindness and company throughout my life journey, where we have crossed
              paths and got to know each other. Each of you has made my life brighter in your unique ways. For the past three years, I
              have been very grateful to get to know Jesus as my Lord and Saviour at the University of Michigan in Ann Arbor, who
              provided me with a beautiful, caring church community. Throughout the past year, God has interestingly grown my care
              for economically disadvantaged persons on the street. Through random coincidences, I have had the opportunity to
              initiate conversations with them by sitting next to sharing meals with them. Although on the surface, these interactions
              may seem unnecessary, foolish or even slightly unsafe, indeed, God taught me a lot from them, especially about his
              Kingdom. Once, I encountered an older gentleman on my way home with a limp and a mark on his face. He begged for
              help next to a liquor store. At that time, I was not particularly inclined to help, but I still felt compelled by the Spirit to talk
              to him. I hesitantly promised to return to him with some food. After almost forgetting, I returned to him with staples and
              takeout. I worried he wouldn’t be there, but he was, with another person caring for him. He gradually told his story that he
              was beaten by punks previously and was left there. Then he burst into tears, thanking Jesus for this provision as it turned
              out all three of us were believers. We prayed together in unison for healing and God’s further provision. Afterwards, I
              called a Lyft to send him to the homeless shelter for further treatment.</p>
        </div>
        <div className={"row"}>
            <p>I have been blessed to have the opportunity to “accidentally” participate in God’s missions. Hence, I feel compelled to
              experience more of His Kingdom and learn how to serve various people better. From February 23rd to March 2nd, I will be
              going with a team from Harvest Mission Community Church to the city of Chicago. We will be partnering with Envision
              Chicago’s Family Empowerment Center as they serve the Rogers Park and Albany Park neighborhoods. Through
              after-school and ESL programs as well as community outreach opportunities, we are hoping to learn from the FEC what it
              means to love people from a diverse range of backgrounds different from our own.</p>
        </div>
        <div className={"row"}>
            <p>I would like to invite you to participate in God’s missions with me through prayers or financial support. God has taught me
              not to be self-reliant. Therefore, I pray that we may raise $550 together by February 23 to cover relevant expenses. Please
              do not feel obligated to give, but even a small contribution will mean a lot.</p>
        </div>
        <div className={"row"}>
            <p>Thank you for reading my letter and being in my life. Please keep us in your prayers. May peace be with you!</p>
            <p>Yours faithfully,</p>
        </div>

        <div className={"row"}>
        <div className={"col-lg-4 col-md-5 col-sm-7 col-xs-7"}>
            <img src={signature_eng} className={"img-responsive signature"} alt={"Norman Qining Wen"}/>
        </div>
        </div>
        <div class={"row"}>
          <p>4 Feb 2024</p>
        </div>

      </div>
  );
}

export default Article;
