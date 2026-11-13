
import Navbar from "../Components/Navbar";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const location = useLocation();

useEffect(() => {
  const sectionId = location.state?.scrollTo;

  if (sectionId) {
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth"
      });
    }, 100);

    window.history.replaceState({}, document.title, "/");
  }
}, [location]);
  const features = [
    {
      icon: "📋",
      title: "Application Management",
      description:
        "Save all your job applications in one place. Store company names, job roles, locations, application dates, job descriptions and application links."
    },
    {
      icon: "📊",
      title: "Application Status Tracking",
      description:
        "Track your job search journey. Know which applications are applied, interviewing, selected or rejected."
    },
    {
      icon: "👤",
      title: "Personal Profile",
      description:
        "Manage your professional information from one place and keep your profile updated."
    },
    {
      icon: "🔐",
      title: "Secure User Account",
      description:
        "Access your personal application dashboard through secure authentication. Your applications are associated with your account."
    }
  ];

  const upcomingFeatures = [
    {
      icon: "🤖",
      title: "AI Job Description Analyzer",
      description:
        "Summarize long job descriptions, identify required skills and understand job requirements in simple language."
    },
    {
      icon: "🎯",
      title: "AI Resume Matching",
      description:
        "Compare your resume with a job description, receive a matching score and discover missing skills."
    },
    {
      icon: "💡",
      title: "AI Interview Preparation",
      description:
        "Generate technical and HR interview questions based on the job role and company requirements."
    },
    {
      icon: "✉️",
      title: "AI Email Assistant",
      description:
        "Generate professional job application emails, recruiter follow-ups and interview thank-you messages."
    },
    {
      icon: "⏰",
      title: "Follow-up Reminders",
      description:
        "Set reminders for applications and avoid missing important follow-up opportunities."
    },
    {
      icon: "📈",
      title: "Career Analytics",
      description:
        "Understand your job search progress through application statistics and response insights."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description:
        "Register and create your personal account to start organizing your job search."
    },
    {
      number: "02",
      title: "Add Job Applications",
      description:
        "Save company details, job descriptions, job links, locations and application dates."
    },
    {
      number: "03",
      title: "Track Your Progress",
      description:
        "View your applications and update their status as you move through the recruitment process."
    },
    {
      number: "04",
      title: "Prepare for Opportunities",
      description:
        "Use planned AI-powered tools to understand job requirements and prepare for interviews."
    }
  ];

  const faqs = [
    {
      question: "What is Placement Application Tracker?",
      answer:
        "It is a platform that helps job seekers organize, manage and track their job applications from one place."
    },
    {
      question: "Can I track multiple job applications?",
      answer:
        "Yes. You can save multiple applications with company names, job roles, locations, dates, statuses and other details."
    },
    {
      question: "Are my applications private?",
      answer:
        "Your applications are associated with your account. You must log in to access your protected dashboard."
    },
    {
      question: "Will this platform provide AI features?",
      answer:
        "AI-powered job description analysis, resume matching, interview preparation and email assistance are planned future features."
    },
    {
      question: "Is this platform useful for freshers?",
      answer:
        "Yes. Freshers, students and experienced professionals can use an organized application tracker to manage their job search."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      <Navbar />

      {/* Hero Section */}
      <section className="overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-700 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">

          <div>
            <span className="inline-block rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-sm text-blue-100">
              Your smarter job search starts here
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Your Job Search.
              <span className="block text-blue-300">
                One Organized Place.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Applying for jobs can become confusing when you manage multiple
              companies, job descriptions, application links and interview
              updates. Placement Application Tracker helps you organize every
              opportunity and manage your job search journey with confidence.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/dashboard"
                className="rounded-xl bg-white px-7 py-3.5 font-bold text-blue-800 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Explore Dashboard →
              </Link>

              <a
                href="#how-it-works"
                className="rounded-xl border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Platform
              </a>
            </div>

            <p className="mt-6 text-sm text-blue-200">
              Built to help students, freshers and professionals stay organized.
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="rounded-2xl border border-white/20 bg-white p-5 text-slate-800 shadow-2xl md:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Your workspace
                </p>
                <h2 className="text-2xl font-bold">My Applications</h2>
              </div>

              <span className="rounded-lg bg-blue-100 px-3 py-2 text-sm font-semibold text-blue-700">
                Preview
              </span>
            </div>

            <div className="mt-7 space-y-4">
              {[
                ["Company A", "Java Developer", "Applied"],
                ["Company B", "Software Engineer", "Interview"],
                ["Company C", "Full Stack Developer", "In Progress"]
              ].map((job) => (
                <div
                  key={job[0]}
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-4"
                >
                  <div>
                    <h3 className="font-bold">{job[0]}</h3>
                    <p className="mt-1 text-sm text-slate-500">{job[1]}</p>
                  </div>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {job[2]}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 rounded-xl bg-slate-100 p-4 text-sm text-slate-500">
              Example preview — not live application data.
            </p>
          </div>

        </div>
      </section>

      {/* Problem Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-widest text-blue-700">
            The Challenge
          </p>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Job Hunting Should Not Feel Like Managing a Mess
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            During a job search, you may apply to several companies through
            different websites. Important information gets scattered across
            browser tabs, spreadsheets, emails and personal notes. You might
            forget where you applied, which role you selected or when you
            should follow up.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["🗂️", "Scattered Information", "Company names, job links and descriptions are stored in different places."],
            ["🤔", "Forgotten Applications", "It becomes difficult to remember which companies you have already contacted."],
            ["⌛", "Missed Follow-ups", "Without a clear record, important updates and follow-up opportunities can be missed."]
          ].map((item) => (
            <div key={item[1]} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-3xl">{item[0]}</div>
              <h3 className="mt-4 text-xl font-bold">{item[1]}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item[2]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-blue-50 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-700">
              Our Solution
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Everything You Need to Manage Your Job Search
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Placement Application Tracker gives you a dedicated workspace
              where you can save job opportunities, organize application
              details and monitor your progress. Instead of remembering
              everything yourself, keep a clear record of your job search.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Whether you are applying for internships, fresher positions or
              experienced roles, the goal is simple: make your job search
              easier to manage and help you focus on preparing for opportunities.
            </p>

            <Link
              to="/dashboard"
              className="mt-7 inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
            >
              Go to Dashboard
            </Link>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h3 className="text-xl font-bold">Your Job Search Workspace</h3>

            <div className="mt-6 space-y-5">
              {[
                "Save company and job role information",
                "Store original job descriptions and links",
                "Keep application dates and locations",
                "Update your application status",
                "Access your personal dashboard"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                    ✓
                  </span>
                  <p className="pt-1 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-widest text-blue-700">
            Platform Features
          </p>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Tools to Keep Your Applications Organized
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Manage the important details of your job search with a simple,
            easy-to-use application tracking platform.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-300">
              Simple Process
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              How Placement Application Tracker Works
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Start with a simple workflow. As your job search grows, your
              application history stays organized and easy to access.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="text-3xl font-extrabold text-blue-300">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section id="upcoming" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700">
            Future Roadmap
          </span>

          <h2 className="mt-6 text-3xl font-extrabold md:text-4xl">
            More Than a Tracker. Your Future Career Assistant.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            We plan to expand the platform with intelligent tools that support
            you at every stage of your job search — from understanding a job
            description to preparing for an interview.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingFeatures.map((feature) => (
            <div key={feature.title} className="relative rounded-2xl border border-purple-100 bg-white p-7 shadow-sm">
              <span className="absolute right-5 top-5 rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
                Coming Soon
              </span>

              <div className="mt-5 text-4xl">{feature.icon}</div>
              <h3 className="mt-5 text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Built for Every Stage of Your Career Journey
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A job search is not just about sending applications. It is about
              staying consistent, learning from opportunities and being ready
              when the right interview arrives.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["🎓", "For Students & Freshers", "Keep internship and fresher job applications organized while preparing for your first professional opportunity."],
              ["💼", "For Job Seekers", "Manage multiple applications, recruitment stages and important job information without depending on scattered notes."],
              ["🚀", "For Career Growth", "Build better job-search habits and use planned career tools to prepare for your next opportunity."]
            ].map((item) => (
              <div key={item[1]} className="rounded-2xl bg-white p-7 shadow-sm">
                <div className="text-4xl">{item[0]}</div>
                <h3 className="mt-4 text-xl font-bold">{item[1]}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <p className="font-bold uppercase tracking-widest text-blue-700">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-3xl font-extrabold">
            Have Questions?
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer list-none font-bold text-slate-800">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-xl text-blue-700 group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-700 px-6 py-20 text-center text-white">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold md:text-5xl">
          Take Control of Your Job Search Today
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-100">
          Stop losing track of opportunities. Start organizing your
          applications, managing your progress and preparing for your future.
          Your next opportunity deserves a better plan.
        </p>

        <Link
          to="/dashboard"
          className="mt-9 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-800 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
        >
          Explore Your Workspace →
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-12 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-extrabold text-white">
              PlacementTracker
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              A smarter way to organize your job applications, track your
              progress and prepare for future career opportunities.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Quick Links</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#how-it-works" className="hover:text-white">How It Works</a>
              <a href="#upcoming" className="hover:text-white">Future Roadmap</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Get Started</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link to="/register" className="hover:text-white">
                Create Account
              </Link>
              <Link to="/login" className="hover:text-white">
                Login
              </Link>
              <Link to="/dashboard" className="hover:text-white">
                Dashboard
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Placement Application Tracker. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
