import React from "react";
// import { VscServerProcess } from "react-icons/vsc";
import {
  //   MdPriceCheck,

  MdSupportAgent,
} from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import { FaUserCog } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";

import AboutCard from "./AboutCard";
function AdminPage() {
  return (
    <div>
      <div className="max-w-full mx-auto p-4">
        <div className="max-w-[1240px] mx-auto px-4 py-16 ">
          <div>
            <h1 className="py-4 text-3xl font-bold">
              <span className="text-neutral-600">My</span>
              <span className="text-blue-600">Maneger</span>
            </h1>

            {/* Card Container */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card */}
              <AboutCard
                icon={<GiWorld size={40} />}
                heading="Add New destination
                "
              />

              <AboutCard
                icon={<FiEdit size={40} />}
                heading="edit destination
                Page"
              />
              <AboutCard icon={<FaUserCog size={40} />} heading="User Edit" />
              <AboutCard icon={<VscGraph size={40} />} heading="statistics" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
