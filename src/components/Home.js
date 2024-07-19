import { Fragment } from "react";

const LinkedInButton = (props) => {
    const buttonStyle = {
      display: 'flex',
      alignItems: 'center',
      background: '#191919',
      color: 'white',
      borderRadius: '10px',
      padding: '10px 20px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textDecoration: 'none',
      fontFamily: 'Segoe UI',
    };
  
    const logoStyle = {
      width: '30px',
      height: '30px',
      marginRight: '10px',
    };
  
    const textStyle = {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
    };
    const clickhandler=()=>{
        window.open("https://www.linkedin.com/in/ahmad-sarmad-ali-ba288b24b/")
    }
  
    return (
      <button onClick={clickhandler}   style={buttonStyle}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor ="black"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor ="#191919"}
      >
        <img src={`${process.env.PUBLIC_URL}/linkedIn.png`} alt="LinkedIn" style={logoStyle} />
        <div style={textStyle}>
          <span>LinkedIn</span>
          <span style={{ fontSize: '12px', color: '#AAAAAA' }}>Connect with me</span>
        </div>
      </button>
    );
  };

  const GithubButton = (props) => {
    const buttonStyle = {
      display: 'flex',
      alignItems: 'center',
      background: '#191919',
      color: 'white',
      borderRadius: '10px',
      padding: '10px 20px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textDecoration: 'none',
      fontFamily: 'Segoe UI',
    };
  
    const logoStyle = {
      width: '30px',
      height: '30px',
      marginRight: '10px',
    };
  
    const textStyle = {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
    };
    const clickhandler=()=>{
        window.open("https://github.com/SARMAD-ALI-cyber")
    }
  
    return (
      <button onClick={clickhandler}   style={buttonStyle}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor ="black"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor ="#191919"}
      >
        <img src={`${process.env.PUBLIC_URL}/github.png`} alt="GitHub" style={logoStyle} />
        <div style={textStyle}>
          <span>GitHub</span>
          <span style={{ fontSize: '12px', color: '#AAAAAA' }}>See My Work</span>
        </div>
      </button>
    );
  };


  const KaggleButton = (props) => {
    const buttonStyle = {
      display: 'flex',
      alignItems: 'center',
      background: '#191919',
      color: 'white',
      borderRadius: '10px',
      padding: '10px 20px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textDecoration: 'none',
      fontFamily: 'Segoe UI',
    };
  
    const logoStyle = {
      width: '30px',
      height: '30px',
      marginRight: '10px',
    };
  
    const textStyle = {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
    };
    const clickhandler=()=>{
        window.open("https://www.kaggle.com/ahmadsarmadali")
    }
  
    return (
      <button onClick={clickhandler}   style={buttonStyle}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor ="black"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor ="#191919"}
      >
        <img src={`${process.env.PUBLIC_URL}/kaggle.png`} alt="Kaggle" style={logoStyle} />
        <div style={textStyle}>
          <span>Kaggle</span>
          <span style={{ fontSize: '12px', color: '#AAAAAA' }}>See My Work</span>
        </div>
      </button>
    );
  };

export default function Home(props) {
    const hirehandler =()=>{
        window.open("https://www.linkedin.com/in/ahmad-sarmad-ali-ba288b24b/");
    }
    const handledownload=()=>{
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/AHMAD SARMAD ALI.pdf`;
        link.download = 'AHMAD SARMAD ALI.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <Fragment>
            <div className="header">
                <div className="heading">
                <h1 >
                <span style={{ color: "red" }}>Hello, </span>
                I'm Ahmad Sarmad Ali<br />
                Deep Learning Engineer At<br />
                Walee Islamabad<br />
                </h1>
                <p>A passionate Deep Learning Researcher with more
                    than 2 years<br/> of experience in the field of  DL and
                    ML working on techniques<br/> like Federated Learning, Machine
                    Unlearning, Knowledge Distillation.
                </p><br/>
                <button style={{background:"red",
                    color:"white",
                    borderRadius:"10px",
                    height:"40px",
                    width:"100px",
                    boxShadow:"none",
                    fontFamily:'Segoe UI',
                    cursor:"pointer",
                    border:"none",
                }}onMouseOver={(e) => e.currentTarget.style.backgroundColor = "black"}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = "red"} onClick={hirehandler}>Hire Me</button>

                <button style={{background:"red",
                color:"white",
                borderRadius:"10px",
                height:"40px",
                width:"100px",
                fontFamily:'Segoe UI',
                marginLeft:"40px",
                cursor:"pointer",
                border:"none",
                }}onMouseOver={(e) => e.currentTarget.style.backgroundColor = "black"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "red"}
                onClick={handledownload}
                >Download CV</button>
                </div>
                <div className="picture">{props.mypic}</div>

                <div className="socials">
                <LinkedInButton/>
                <GithubButton/>
                <KaggleButton/>
                </div>
            </div>
            


        </Fragment>
    )
}