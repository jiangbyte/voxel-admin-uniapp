/** Author: Charlie */

import {API_PREFIX} from '@/constants/api'
import { http } from '@/utils/request'

const prefix = API_PREFIX

export function fetchAuthSessionCaptcha() {
    return http.get<any>(`${prefix}/auth/session/captcha`, undefined, {attachSession: false})
}

export function fetchAuthSessionPasswordKey() {
    return http.get<any>(`${prefix}/auth/session/password-key`, undefined, {attachSession: false})
}

export function fetchAuthSessionLogin(data: any) {
    return http.post<any>(`${prefix}/auth/session/login`, data, {attachSession: false})
}

export function fetchAuthSessionLogout() {
  return http.post<any>(`${prefix}/auth/session/logout`)
}

export function fetchAuthSessionMe() {
  return http.get<any>(`${prefix}/auth/session/me`)
}

export function fetchAuthSessionForgotPassword(data: any) {
    return http.post<any>(`${prefix}/auth/session/forgot-password`, data, {attachSession: false})
}

export function fetchAuthSessionResetPassword(data: any) {
    return http.post<any>(`${prefix}/auth/session/reset-password`, data, {attachSession: false})
}

export function fetchProfileAccountUpdate(data: any) {
  return http.post<any>(`${prefix}/profile/account/update`, data)
}

export function fetchProfileAccountPasswordUpdate(data: any) {
  return http.post<any>(`${prefix}/profile/account/password/update`, data)
}

export function fetchProfileAccountPhoneUpdate(data: any) {
  return http.post<any>(`${prefix}/profile/account/phone/update`, data)
}

export function fetchProfileAccountEmailUpdate(data: any) {
  return http.post<any>(`${prefix}/profile/account/email/update`, data)
}

export function fetchProfileOrgInfo() {
  return http.get<any>(`${prefix}/profile/org-info`)
}

export function fetchAuthUploadAvatar(filePath: string) {
    return http.upload<any>(`${prefix}/profile/account/avatar/upload`, filePath)
}
