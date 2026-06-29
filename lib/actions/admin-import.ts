"use server";

export async function importPartsAction(formData: FormData) {
  const file = formData.get("file");

  if (!(file instanceof File)) {
    throw new Error("Необходимо выбрать файл");
  }

  const fileName = file.name || "upload";
  const extension = fileName.toLowerCase().split(".").pop() ?? "";

  if (!["csv", "xls", "xlsx"].includes(extension)) {
    throw new Error("Неподдерживаемый формат файла. Используйте CSV, XLS или XLSX.");
  }

  throw new Error("Импорт отключен в упрощенной версии каталога.");
}
