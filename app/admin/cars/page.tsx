import { redirect } from "next/navigation";

export default function AdminCarsRedirectPage() {
  redirect("/admin/models");
}
