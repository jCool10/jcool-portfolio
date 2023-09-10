import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export interface ServiceType {
  Icon: OverridableComponent<SvgIconTypeMap>
  title: string
  description: string
}

export interface SidebarType {
  Icon: OverridableComponent<SvgIconTypeMap>
  // Icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>
  title: string
  description: string
}

export interface SkillType {
  title: string
  image: string
}

export interface ContactType {
  email: string
  name: string
  message: string
}
