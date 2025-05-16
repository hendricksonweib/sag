import { Request, Response } from 'express';
export declare const getEscolas: (req: Request, res: Response) => Promise<void>;
export declare const getEscolaById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createEscola: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateEscola: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteEscola: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
