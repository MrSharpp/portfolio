import { dateDiffInDays } from "./utils";

function Badge({ children, ...props }) {
  return (
    <div className="flex gap-1 justify-center border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline">
      {children} &#160;
    </div>
  );
}

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
    </section>
  );
}
