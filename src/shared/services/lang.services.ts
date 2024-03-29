// Trong ứng dụng Electron của bạn
import * as fs from 'fs';
import * as path from 'path';
import { Language } from '../interfaces/language.interface';
// Hàm để tải tệp ngôn ngữ
function loadLanguage(languageCode: string): Language {
  const langFilePath = path.join(__dirname, '../../../public/lang', `${languageCode}.json`);
  const langData = fs.readFileSync(langFilePath, 'utf8');
  return JSON.parse(langData) as Language;
}
// Sử dụng hàm để tải tệp ngôn ngữ
const langCode: string = 'en'; // Ngôn ngữ được chọn, bạn có thể thay đổi nó dựa trên lựa chọn của người dùng
const langConstants: Language = loadLanguage(langCode);
// Sử dụng các hằng số từ tệp ngôn ngữ
console.log(langConstants.welcomeMessage); // In ra "Welcome!"
console.log(langConstants.confirmButtonText); // In ra "Confirm"
