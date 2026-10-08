"use client";
import React from "react";
import { userInfo } from "./data";

export default function Notes() {
  const totalClasses = userInfo.notes.length;
  const approvedNotes = userInfo.notes.filter((note) => note.state === "AP");
  const pendingNotes = userInfo.notes.filter((note) => note.state === "RP");
  const approvedClasses = approvedNotes.length;
  const pendingClasses = totalClasses - approvedClasses;
  const [showApprovedModal, setShowApprovedModal] = React.useState(false);
  const [showTotalNotes, setShowTotalNotes] = React.useState(false);
  const [showPendingModalClass, setShowPendingModalClass] =
    React.useState(false);

  return (
    <React.Fragment key="notes-page">
      <section className="m-15">
        <h1 className="text-gray-900 text-center  mt-4 text-3xl">
          Welcome {userInfo.name}
        </h1>
        <div className="mx-auto mt-4 flex w-full max-w-2xl flex-wrap items-center justify-center gap-3 rounded-lg  px-4 py-3 text-sm text-gray-700 ">
          <button
            type="button"
            onClick={() => {
              setShowTotalNotes(true);
            }}
            className="rounded-md border border-gray-300 bg-white px-3 py-2"
          >
            Total Classes: <strong>{totalClasses}</strong>
          </button>
          <button
            type="button"
            onClick={() => setShowApprovedModal(true)}
            className="rounded-md border border-gray-300 bg-white px-3 py-2 transition hover:bg-gray-200 cursor-pointer"
          >
            Aproved Classes: <strong>{approvedClasses}</strong>
          </button>
          <button
            type="button"
            onClick={() => {
              setShowPendingModalClass(true);
            }}
            className="rounded-md border border-gray-300 bg-white px-3 py-2"
          >
            Classes to Aprove: <strong>{pendingClasses}</strong>
          </button>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center font-sans ">
          <h3 className="text-amber-500 text-3xl">
            Notes Page of {userInfo.name}
          </h3>

          <div className="mt-2">
            <React.Fragment>
              <table className="m-2 w-full max-w-3xl border border-gray-400 bg-gray-100 text-black shadow-sm border-collapse">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 text-left">
                      Class Code
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left">
                      Class Name
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left">
                      State
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left">
                      Modality
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left">
                      Note
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userInfo.notes.map((note) => (
                    <tr
                      key={note.id}
                      className="odd:bg-gray-100 even:bg-gray-50"
                    >
                      <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                        {note.code}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                        {note.title}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                        {note.state}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                        {note.modality}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                        {note.note}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                        <span
                          className={`${note.badgeColor} inline-block rounded px-2 py-1 text-white`}
                        >
                          {note.badge}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </React.Fragment>
            <p className="text-gray-500 mt-4">
              {" "}
              This is the notes page. You can see your semester notes here.
            </p>
          </div>
        </div>
        {showApprovedModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div className="w-full max-w-2xl rounded-xl bg-white p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Clases aprobadas
                </h2>
                <button
                  type="button"
                  onClick={() => setShowApprovedModal(false)}
                  className="rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Close
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-gray-50 text-left text-sm text-gray-800">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">Code</th>
                      <th className="border border-gray-300 px-4 py-2">
                        Class
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Modality
                      </th>
                      <th className="border border-gray-300 px-4 py-2">Note</th>
                      <th className="border border-gray-300 px-4 py-2">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {approvedNotes.map((note) => (
                      <tr
                        key={note.id}
                        className="odd:bg-white even:bg-gray-50"
                      >
                        <td className="border border-gray-300 px-4 py-2">
                          {note.code}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {note.title}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {note.modality}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {note.note}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span
                            className={`${note.badgeColor} inline-block rounded px-2 py-1 text-white`}
                          >
                            {note.badge}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {showTotalNotes && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div className="w-full max-w-2xl rounded-xl bg-white p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Clases semestrales
                </h2>
                <button
                  type="button"
                  onClick={() => {
                    setShowTotalNotes(false);
                  }}
                  className="rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Close
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="m-2 w-full max-w-3xl border border-gray-400 bg-gray-100 text-black shadow-sm border-collapse">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left">
                        Class Code
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left">
                        Class Name
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left">
                        State
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left">
                        Modality
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left">
                        Note
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {userInfo.notes.map((note) => (
                      <tr
                        key={note.id}
                        className="odd:bg-gray-100 even:bg-gray-50"
                      >
                        <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                          {note.code}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                          {note.title}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                          {note.state}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                          {note.modality}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                          {note.note}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                          <span
                            className={`${note.badgeColor} inline-block rounded px-2 py-1 text-white`}
                          >
                            {note.badge}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {showPendingModalClass && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shodow-xl">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Classes to Aprove
                </h2>
                <button
                  type="button"
                  onClick={() => {
                    setShowPendingModalClass(false);
                  }}
                  className="rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Close
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="m-2 w-full max-w-3xl border border-gray-400 bg-gray-100 text-black shadow-sm border-collapse">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left">
                        Class Code
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left">
                        Class Name
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left">
                        State
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left">
                        Modality
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left">
                        Note
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingNotes.map((note) => (
                      <tr
                        key={note.id}
                        className="odd:bg-gray-100 even:bg-gray-50"
                      >
                        <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                          {note.code}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                          {note.title}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                          {note.state}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                          {note.modality}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                          {note.note}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-black">
                          <span
                            className={`${note.badgeColor} inline-block rounded px-2 py-1 text-white`}
                          >
                            {note.badge}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </section>
    </React.Fragment>
  );
}
