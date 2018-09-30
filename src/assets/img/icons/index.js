import Vue from 'vue'
import SvgIcon from '@/components/svgIcon.vue'

Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('.', false, /\.svg$/)
requireAll(req)