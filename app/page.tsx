import { dateDiffInDays } from "./utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faGithub,
  faStackOverflow,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        👋 Hey, I am Amir Alam
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I'm a {dateDiffInDays(Date.parse("01/1/2004"), Date.now())} y/o
        Fullstack Developer, specializing in Backend development.
      </p>
      <p className="prose prose-neutral dark:prose-invert">
        In 2017, I began my venture into the realm of Game Development using
        Unity.
        <br /> Over time, I discovered my enthusiasm for creating and
        implementing sophisticated systems.
      </p>
      <br />
      <ul>
        <li className="prose prose-neutral dark:prose-invert">
          -{">"} I take pleasure in actively participating in open-source
          initiatives, as demonstrated by my contribution to "UI Recorder" by
          Alibaba, ArchSense And OSS.
        </li>
        <li className="prose prose-neutral dark:prose-invert">
          {" "}
          -{">"} I have authored the npm library "adb-wrapper," and although it
          may not be highly active, it remains a valuable project.
        </li>
      </ul>
      <br />

      <p className="prose prose-neutral dark:prose-invert">
        Continuing my journey to achieve something impactful in technology for
        fellow developers.
      </p>
      <br />
      <div className="flex gap-4">
        <a
          className="no-underline"
          href={"https://twitter.com/momrsharp"}
          target="_blank"
        >
          <FontAwesomeIcon icon={faSquareXTwitter} width={20} />
        </a>

        <a
          className="no-underline"
          href={"https://github.com/MrSharpp"}
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} width={20} />
        </a>

        <a
          className="no-underline"
          href={"https://stackoverflow.com/users/11168794/amir-alam"}
          target="_blank"
        >
          <FontAwesomeIcon icon={faStackOverflow} width={20} height={23} />
        </a>

        <a
          className="no-underline"
          href={"https://www.linkedin.com/in/amir-alam-44378416b/"}
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} width={20} height={23} />
        </a>
      </div>
    </section>
  );
}
