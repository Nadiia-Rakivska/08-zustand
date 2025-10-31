import NoteForm from "@/components/NoteForm/NoteForm"
import css from "./CreateNote.module.css"
import { Metadata } from "next";
import { IMG_URL, SITE_URL } from "@/lib/constants";
export const metadata: Metadata = {
  title: "Create a New Note | NoteHub",
  description:
    "Start a new note on NoteHub — a fast, secure, and intuitive platform for writing, organizing, and managing your ideas anytime, anywhere.",
  openGraph: {
    title: "Create a New Note | NoteHub",
    description:
      "Easily create and manage your notes with NoteHub. Write, edit, and organize your thoughts using our clean and powerful note-taking interface.",
    url: `${SITE_URL}/notes/action/create`,

    images: [
      {
        url: IMG_URL,
        width: 1200,
        height: 630,
        alt: "NoteHub — create and organize your notes online",
      },
    ],
  },
};

export default function CreateNote() {
  return (<main className={css.main}>
    <div className={css.container}>
      <h1 className={css.title}>Create note</h1>
      <NoteForm />
    </div>
  </main>)
}