import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Values() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Core Values
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            At the heart of our company are the values that guide our actions
            and decisions.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-primary rounded-full p-3 text-primary-foreground">
              <div className="h-8 w-7 font-bold text-xl"> F</div>
            </div>
            <h3 className="text-xl font-semibold">Faithful</h3>
            <p className="text-muted-foreground text-center">
              We are passionate and dedicated to making a difference, driven by
              our commitment to our cause.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-primary rounded-full p-3 text-primary-foreground">
              <div className="h-8 w-7 font-bold text-xl">I</div>
            </div>
            <h3 className="text-xl font-semibold">Influential</h3>
            <p className="text-muted-foreground text-center">
              We ignite change and motivate others through our innovative
              approaches and solutions.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-primary rounded-full p-3 text-primary-foreground">
            <div className="h-8 w-7 font-bold text-xl">E</div>
            </div>
            <h3 className="text-xl font-semibold">Effective</h3>
            <p className="text-muted-foreground text-center">
              {" "}
              We believe in lifting others, empowering them to overcome their
              challenges and reach their full potential.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-primary rounded-full p-3 text-primary-foreground">
            <div className="h-8 w-7 font-bold text-xl">R</div>
            </div>
            <h3 className="text-xl font-semibold">Reliable</h3>
            <p className="text-muted-foreground text-center">
              We are unwavering in the face of adversity, standing strong and
              united with our clients.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-primary rounded-full p-3 text-primary-foreground">
            <div className="h-8 w-7 font-bold text-xl">Y</div>
            </div>
            <h3 className="text-xl font-semibold">Yielding</h3>
            <p className="text-muted-foreground text-center">
              We are focused on productive outcomes, ensuring that our efforts
              produce meaningful and lasting results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </svg>
  );
}

function InfinityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function WorkflowIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
