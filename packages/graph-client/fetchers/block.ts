import { addSeconds, getUnixTime, startOfHour, startOfMinute, startOfSecond, subDays } from 'date-fns'

import { getBuiltGraphSDK } from '../.graphclient'

const sdk = getBuiltGraphSDK()

export const getOneDayBlocks = async (chainIds: number[]) => {
  const date = startOfSecond(startOfMinute(startOfHour(subDays(Date.now(), 1))))
  const start = getUnixTime(date)
  const end = getUnixTime(addSeconds(date, 600))
  return sdk.CrossChainBlocks({
    first: 1,
    skip: 0,
    where: { timestamp_gt: start, timestamp_lt: end },
    orderBy: 'timestamp',
    orderDirection: 'desc',
    chainIds,
  })
}

export const getTwoDayBlocks = async (chainIds: number[]) => {
  const date = startOfSecond(startOfMinute(startOfHour(subDays(Date.now(), 2))))
  const start = getUnixTime(date)
  const end = getUnixTime(addSeconds(date, 600))
  return sdk.CrossChainBlocks({
    first: 1,
    skip: 0,
    where: { timestamp_gt: start, timestamp_lt: end },
    orderBy: 'timestamp',
    orderDirection: 'desc',
    chainIds,
  })
}

export const getOneWeekBlocks = async (chainIds: number[]) => {
  const date = startOfSecond(startOfMinute(startOfHour(subDays(Date.now(), 7))))
  const start = getUnixTime(date)
  const end = getUnixTime(addSeconds(date, 600))
  return sdk.CrossChainBlocks({
    first: 1,
    skip: 0,
    where: { timestamp_gt: start, timestamp_lt: end },
    orderBy: 'timestamp',
    orderDirection: 'desc',
    chainIds,
  })
}
