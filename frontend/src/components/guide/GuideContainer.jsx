/* eslint-disable react/no-unescaped-entities */
const GuideContainer = () => {
  return (
    <div className="-z-20">
      <h2 className="title">Guide</h2>
      <div className="space-y-4 ">
        <p>
          This app is inspired by a masterclass given by Stephen Curry and is designed to help you improve your shooting form, wherever you are on the court.
        </p>
        <p>
          The workout is simple: take <span className="font-bold">5 consecutive shots from each spot</span> and note the score on the app.
        </p>
        <p>
          This will give you your shooting percentages for <span className="font-bold">field goals</span> and <span className="font-bold">3-pointers</span>, so you can easily track your progress over time.
        </p>
        <div>
          The training also includes:
          <ul className="list-disc px-9">
            <li><span className="font-bold">Layups (left & right hand)</span> — 20 attempts each</li>
            <li><span className="font-bold">Free throws</span> — 10 attempts</li>
          </ul>
        </div>
        <p>
          If you're training solo, just use a cone or any marker to set your spots. 
        </p>
        <p>
          You can do this workout once a day, or use it as a warm-up before a full practice.
        </p>
        <p>Stay consistent, trust the work, and enjoy the grind 🏀 🔥.</p>
      </div>
      <img src="/joueuse.png" alt="joueuse" className="absolute bottom-10 right-0 opacity-[9%]" />
      <img src="/joueur.png" alt="joueuse" className="absolute top-0 opacity-[9%] w-28 left-0" />
    </div>
  );
};
export default GuideContainer;
