const About = () => {
  return (
    <section id="hero" className="py-24">
      <div className="container h-full mx-auto">
        <div className="grid gap-8 text-center">
          <h2 className="section-title text-4xl md:text-5xl">About Me</h2>

          <div className="max-w-[90%] md:max-[80%] mx-auto">
            <p>
              Frontend Web Developer with nearly{" "}
              <strong>6 years of experience</strong>. Passionate about learning
              new-generation technologies and designs, with a strong ability to
              quickly adopt modern and integrated principles.
            </p>

            <br />

            <ul className="pl-16 mx-auto">
              <li>
                Proficient in developing and maintaining web applications using{" "}
                <strong>
                  HTML, CSS (Sass & PostCSS), JavaScript, React.js, Vue.js,
                  Next.js{" "}
                </strong>
                and <strong>Astro.js,</strong> tailored for{" "}
                <strong>CMS, CRM,</strong> and <strong> ERP systems.</strong>
              </li>
              <li>
                Skilled in implementing frameworks such as{" "}
                <strong>TailwindCSS, Bootstrap, DaisyUI,</strong> and{" "}
                <strong>Vuetify</strong> to create user-friendly and responsive
                front-end interfaces.
              </li>
              <li>
                Utilizes <strong>Vercel, Vite.js, Gulp.js, Webpack</strong> and{" "}
                <strong>Jenkins</strong> for efficient project setup and
                deployment.
              </li>
              <li>
                Experienced with UI/UX design tools, including{" "}
                <strong>Figma, Sketch</strong> and <strong>Adobe XD</strong>.
              </li>
              <li>
                Adept in code management through version control systems like{" "}
                <strong>Git</strong>.
              </li>
              <li>
                Adheres to Agile methodologies for task prioritization, progress
                tracking, and timely project delivery.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
