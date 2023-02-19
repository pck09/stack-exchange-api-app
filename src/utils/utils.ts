import dayjs from "dayjs";
import { DateFormat } from "../models/models";

export const formatNumber = (value: number) =>
  new Intl.NumberFormat().format(value);

const dateFormatMap: Record<DateFormat, string> = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DD HH:MM",
};

export const formatDate = (value: number, format: DateFormat = "datetime") =>
  dayjs.unix(value).format(dateFormatMap[format]);
