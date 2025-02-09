import { readFileSync } from 'fs';
import path from 'path';
import { parse } from 'yaml';
import { ResumeData } from '@/types/resume';

export function parseResume(): ResumeData {
    const filePath = path.resolve(process.cwd(), 'content', 'resume.yml');
    const fileContents = readFileSync(filePath, 'utf8');
    return parse(fileContents) as ResumeData;
}