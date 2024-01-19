// 获取个人信息
// GET / member / profile
// 请求参数

import type { ProfileDetail } from '@/types/member'
import { http } from '@/utils/http'

export const getMemberProfileApi = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}
