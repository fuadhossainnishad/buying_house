
import M1 from "./M1";
import M2 from "./M2";
import M3 from "./M3";
import M4 from "./M4";
import M5 from "./M5";

export default function Middle() {
  return (
    <main className="space-y-14 ">
      <section className="flex justify-between gap-10 pt-10">
        <M2 />
        <M1 />
      </section>
      <M3 />
      <section className="space-y-6">
        <section className="flex justify-between  ">
          <h1 className="border-b-4 inline-block text-black text-2xl font-bold">
            Top Trending This Week
          </h1>
          <button className="text-gray-500 text-sm  hover:text-violet-500 ">
            View All &gt;&gt;
          </button>
        </section>
        <M4 />
      </section>
      <section className="space-y-6">
        <section className="flex justify-between">
          <h1 className="border-b-4 inline-block text-black text-2xl font-bold">
            Top Trending This Week
          </h1>
          <button className="text-gray-500 text-sm  hover:text-violet-500 ">
            View All &gt;&gt;
          </button>
        </section>{" "}
        <M5 />
      </section>
      <section className="space-y-6">
        <section className="flex justify-between">
          <h1 className="border-b-4 inline-block text-black text-2xl font-bold">
            Top Trending This Week
          </h1>
          <button className="text-gray-500 text-sm  hover:text-violet-500 ">
            View All &gt;&gt;
          </button>
        </section>{" "}
        <M4 />
      </section>
      <section className="space-y-6">
        <section className="flex justify-between">
          <h1 className="border-b-4 inline-block text-black text-2xl font-bold">
            Top Trending This Week
          </h1>
          <button className="text-gray-500 text-sm  hover:text-violet-500 ">
            View All &gt;&gt;
          </button>
        </section>{" "}
        <M4 />
      </section>
    </main>
  );
}
