import { useState, useEffect, useRef } from "react";
import { useSwipeable } from 'react-swipeable';
import "./App.css";
import { NavBar } from "./component/nav";
import { Welcome } from "./layouts/home/welcome";
import { Host } from "./layouts/home/host";
import { Find } from "./layouts/home/find";
import { Feedback } from "./layouts/home/feedback";
import { Stories } from "./layouts/home/stories";
import { Yoga } from "./layouts/home/yoga";
import { Connection } from "./layouts/home/connection";
import { Chef } from "./layouts/home/chef";
import { Scifi } from "./layouts/home/scifi";
import { Startup } from "./layouts/home/startup";
import { Form } from "./layouts/home/form";
import { Lanuch } from "./layouts/home/launch";
import { Share } from "./layouts/home/share";
import { Mouse } from "./component/mouse";
import swal from 'sweetalert';

//Firebase Database
import { logEvent } from "firebase/analytics";
import { collection, addDoc } from "firebase/firestore";
import { db, analytics } from "./service/firebase";

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [myIdea, setMyIdea] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [test, setTest] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //Visitation Event
    logEvent(analytics, 'society website visited');
  }, [])

  const validate = () => {
    let validateErr = {}
    const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

    if (!isEmail) {
      validateErr.email = 'enter a valid email';
    }

    if (nickname.length < 2) {
      validateErr.nickname = 'nickname too short';
    }

    if (nickname === "") {
      validateErr.nickname = "enter a nickname";
    }
    return validateErr;
  }

  const onSubmitData = async () => {
    const validationError = validate();
    setError(validationError);
    try {
      if (Object.keys(validationError).length === 0) {
        setLoading(true);
        logEvent(analytics, 'user registeration ');
        await addDoc(collection(db, "user"), {
          myIdea: myIdea,
          nickname: nickname,
          email: email,
          test: test === "YES" ? true : false
        });

        setLoading(false);
        setMyIdea("");
        setNickname("");
        setEmail("");
        setTest("");
        swal("Good job!", "Thank you for joining us!", "success");

        setTimeout(() => {
          setActiveSection(12)
        }, 1000);
      } else {

        let errorText = '';

        if (validationError.email) {
          errorText += `${validationError.email} \n`;
        }
        if (validationError.nickname) {
          errorText += `${validationError.nickname} \n`
        }

        swal({
          title: "error",
          text: errorText,
          icon: "warning",
          dangerMode: true,
        })
      }
    } catch (e) {
      setLoading(false);
      setMyIdea("");
      setNickname("");
      setEmail("");
      setTest("");
      swal("Oops!", "Seems like ans error occured!", "error");

    }
  }

  useEffect(() => { }, [error])

  const handlers = useSwipeable({
    onSwipedDown: (eventData) => {
      if (eventData.absY >= 210) {
        if (activeSection === 0) {
          setActiveSection(0);
        } else {
          setActiveSection(activeSection - 1);
        }
      }
    },
    onSwipedUp: (eventData) => {
      if (eventData.absY >= 210) {
        if (activeSection === 12) {
          setActiveSection(0);
        } else {
          setActiveSection(activeSection + 1);
        }
      }
    }
  });

  useEffect(() => {
    const handlewheel = (event) => {
      if (event.deltaY >= 5) {
        if (activeSection === 12) {
          setActiveSection(0);
        } else {
          setActiveSection(activeSection + 1);
        }
      } else if (event.deltaY <= -5 && event.deltaY > -15) {
        if (activeSection !== 0) {
          setActiveSection(activeSection - 1)
        }
      }
    };

    setTimeout(() => {
      window.addEventListener("wheel", handlewheel);
    }, 1000)


    return () => window.removeEventListener("wheel", handlewheel);
  }, [activeSection])


  return (
    <div className="app font-worksans h-screen fixed inset-x-0 left-0 right-0" {...handlers}>
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}

      />
      <Mouse
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <Welcome
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Host activeSection={activeSection} />
      <Find activeSection={activeSection} />
      <Feedback activeSection={activeSection} />
      <Stories activeSection={activeSection} />
      <Yoga activeSection={activeSection} />
      <Connection activeSection={activeSection} />
      <Chef activeSection={activeSection} />
      <Scifi activeSection={activeSection} />
      <Startup activeSection={activeSection} />
      <Form
        setActiveSection={setActiveSection}
        myIdea={myIdea}
        setMyIdea={setMyIdea}
        activeSection={activeSection} />
      <Lanuch
        error={error}
        nickname={nickname}
        email={email}
        setNickname={setNickname}
        setEmail={setEmail}
        onSubmitData={onSubmitData}
        activeSection={activeSection}
        test={test}
        setTest={setTest}
        loading={loading}
      />
      <Share
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>
  );
}

export default App;
