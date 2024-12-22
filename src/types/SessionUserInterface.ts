import type { AdapterUser } from "@auth/core/adapters";

export interface SessionUser extends AdapterUser {
	userRole: string;
}