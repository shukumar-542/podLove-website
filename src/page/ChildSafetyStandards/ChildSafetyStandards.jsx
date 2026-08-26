import React from "react";
import { Link } from "react-router";

const ChildSafetyStandards = () => {
  return (
    <div className="bg-[#faf2ef] min-h-[70vh]">
      <div className="px-3 md:container mx-auto">
        <h1 className="text-2xl text-center font-poppins py-10 font-semibold">
          Child Safety Standards
        </h1>

        <div className="text-base text-black font-poppins bg-[#faf2ef] pb-10 space-y-6">
          <h1 className="text-xl font-bold">PodLove Trust and Safety Policy</h1>
          <p>
            PodLove's purpose is to help people find, choose, and build healthy,
            lasting love. Protecting children is core to that purpose, not
            separate from it.
          </p>

          <h2 className="text-xl font-bold">Age Requirement</h2>
          <p>
            PodLove is built for adults ages 35 to 55. The platform is presented
            as adults only, and age is required at account creation.
          </p>

          <h2 className="text-xl font-bold">
            Our Standard on Child Sexual Abuse and Exploitation
          </h2>
          <p>
            PodLove maintains zero tolerance for child sexual abuse material,
            child exploitation, grooming, or any content or conduct that
            endangers a minor. This standard applies across the app, episodes,
            blog, and all participant communications.
          </p>

          <h2 className="text-xl font-bold">Prevention Measures</h2>
          <p>
            PodLove's format includes human review and verification checkpoints
            prior to any content being produced. These safeguards are built into
            the platform's design and are not limited to automated review alone.
          </p>

          <h2 className="text-xl font-bold">Prohibited Content and Behavior</h2>
          <p>
            PodLove prohibits any content or behavior that sexualizes,
            endangers, or exploits a minor, including grooming, solicitation,
            misrepresentation of age, and the sharing or distribution of child
            sexual abuse material in any form.
          </p>

          <h2 className="text-xl font-bold">Reporting</h2>
          <p>
            Anyone with a child safety concern related to PodLove can report it
            through PodLove's <Link to="/contact-us" className="text-[#FFA175] underline">Contact page</Link>. Every report is reviewed
            promptly.
          </p>

          <h2 className="text-xl font-bold">Our Response</h2>
          <p>
            PodLove investigates every report, suspends accounts under
            investigation, and reports confirmed violations to the National
            Center for Missing and Exploited Children (NCMEC) in accordance with
            applicable law. Confirmed violations result in permanent removal
            from the platform.
          </p>

          <h2 className="text-xl font-bold">Contact</h2>
          <p>
            Questions about this policy can be directed through PodLove's{" "}
            <Link to="/contact-us" className="text-[#FFA175] underline">Contact page</Link>.
          </p>

          <p className="italic pt-4">Last updated: August 2026</p>
        </div>
      </div>
    </div>
  );
};

export default ChildSafetyStandards;
