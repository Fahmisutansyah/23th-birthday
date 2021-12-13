/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import moment from "moment";
import { useStore } from "../../zustand/store";
import "./index.scss";
import { useNavigate } from "react-router";

const Letter = () => {
  const dob = useStore((state) => state.dob);
  const navigate = useNavigate();
  useEffect(() => {
    if (moment(dob).format("L") !== "12/12/1998") {
      navigate("/");
    }
  }, []);

  return (
    <div className="letter-wrapper flex flex-column justify-center items-center">
      <h1 className="f-headline mt3-ns">My Letter</h1>
      <div className="letter-card br3 w-75 pa4-ns bg-near-white flex flex-column ">
        <div className="text-wrapper">
          <p>
            First of all i would like to say Happy Birthday, its your 23rd.
            You’re getting older and I hope that you are growing as a person,
            happy and healthy. <br />
            <br />
            <b>Disclaimer</b> that I’m writing this is not for me to victimizing
            myself. I’m just trying to reason with everything that happened. I
            hope you understand, and read with an open heart instead of a bitter
            one. <br />
            <br />
            First, I want to say Im sorry, again, and again, and again and I’ll
            never stop saying sorry. Well.. maybe I will but the least I can try
            to do now is do more, for you. I’m sorry for all the things that
            I’ve done that hurt you. Especially the last incident about me and
            my friend, that I didn’t say sorry at first. I’m really sorry for
            that, I couldn’t imagine how much you were hurt by that. And I
            regret it ever since, it was stupid and I shouldn’t have done that.
            <br />
            <br />I regret of putting you into those situations that you had to
            deal with, and for me that I have to deal with this break up.
            <br />
            <br />I am envy of you that you’re able to put your comfort in
            another person. Because for me right now, all I have is you, and now
            you’re not here. I cannot get you back, and we’re not trying to
            reach each other what so ever.
            <br />
            <br />I want to say sorry to your parents, especially bunda. Bunda
            maafin aku sudah membuat anaknya yang sangat berharga dan berbakti,
            sakit hati. Aku hanya meminta untuk tidak ada berat hati di antara
            aku dan bunda, kalo memang iya, please tell me what can I do to make
            it peaceful within our hearts.
            <br />
            <br /> I also want to say sorry to your dad. We didn’t talk much,
            but I remember one time, he was asking me some help to make him a
            website for his company. But I didn’t do it for some reasons back
            then. <br />
            <br />
            For Fira, I am sorry that I hurt your sister. I hope that you don’t
            hate me. If you do, I think its reasonable for you to ask me
            directly how the last incident happened. Because personally, I think
            that your sister’s point of view is “seasoned”. But that’s the past,
            I’m just hoping that you would forgive me.
            <br />
            <br /> Although that it hurts, that we ended up like this, but I’m
            trying to be grateful. We get some space to reflect on our lives,
            and grow as a person individually. Although I still hate the fact
            that you use that space to try to put another person in your life.
            But I guess its just my ego that was blowing up. Seeing you
            willingly open up to another person. While I’m here stuck, not
            knowing how to love. I think often about what you said about you
            wanting to have a real relationship like.. true purpose, real
            purpose. I find it funny that you hold on to that principle, then
            having a relationship with this boy, and while also, hoping (at
            least back then) that we’d found our way back together. I ask, then
            what are you doing with him? You seeing future with him? I don’t
            need to know the answer. I guess im just wrong about you.
            <br />
            <br /> I am thankful that with this space I can reflect and evaluate
            myself to be a better person. Think about what I did wrong, and
            build, well at least try to build a better mindset from them. <br />
            <br />I am thankful for the 5 to 6 years we spent, all the ups and
            downs. It was chaotic, but I always said that loving a person is
            chaotic, if it isn’t chaotic it isn’t love.
            <br />
            <br />
            You’re going to be, at least before marriage, the biggest influence
            in my life. I am aware that I need to find myself first, with you,
            with my career, and especially with my parents. I still love you,
            even if my parents disagree or whatever, thats me and my life. I
            want to prove to the people around me and make it happen. When and
            if the time comes. They don’t know how much of a loving and patient
            person you are, because it is my fault that when I tell them about
            us, I only tell them the bad things, rarely the good things. Because
            i had the mind set of the good things are only for us to keep. So
            again, when and if the time comes, I want to show you and be proud
            of being your partner.
            <br />
            <br />
            <br />
            Next is <b>hope</b>. Tbh I don’t really know. Although I still hope
            that you miss me, and you would still think about me every now and
            then. Maybe out of respect with your new person, that you don’t
            reach me. But I still hope that you not reaching me is because of
            our respect to each other time to grow.
            <br />
            <br />
            Other than that, I have implemented the “the less i know the better”
            coping mechanism with this break up, why? Because the latest
            information I got from you was you getting ready to say yes to a new
            person, because he can give you things I couldn’t in the past. So I
            think that your day to day stories would only be him and you guys
            loving each other or whatever, or your busy days because its peak
            season for your company.
            <br />
            <br />
            Those are the things around my hope.
            <br />
            <br />
            <b>By the way</b>, a bit of a dangerous topic hop,
            <br />
            <br />I know you’re a very self-centric person. Remember the last
            time we met? You said why couldn’t we stay in touch as friends
            because I am the one person who you can be your truly self.
            Logically, I would lose my shit, it would’ve hurt me so much. But
            that shows how much I love you that I didn’t get bothered that much
            by it, I just said hell no basically. So yeah, those are the things,
            that I want to share with you. Thank you for reading this. I hope
            you read it with an open heart. Thank you for your time.
            <br />
            <br />
            Fahmi Sutansyah.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Letter;
