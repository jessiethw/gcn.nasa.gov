/*!
 * Copyright © 2023 United States Government as represented by the
 * Administrator of the National Aeronautics and Space Administration.
 * All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/** Generated with the following Python code:
 *
 *     import json
 *
 *     from gcn_kafka import Consumer
 *     from confluent_kafka import TopicPartition
 *     from datetime import datetime, timedelta
 *
 *     # Connect as a consumer.
 *     # Warning: don't share the client secret with others.
 *     consumer = Consumer(client_id='...', client_secret='...')
 *
 *     topics = sorted(consumer.list_topics().topics.keys())
 *
 *     dt = timedelta(7)
 *     now = datetime.now()
 *     t1 = int(now.timestamp() * 1000)
 *     t2 = int((now - dt).timestamp() * 1000)
 *     dt_secs = dt.total_seconds() / 86400
 *     off1 = [consumer.get_watermark_offsets(TopicPartition(topic, 0))[1] - 1 for topic in topics]
 *     off2 = [meta.offset for meta in consumer.offsets_for_times([TopicPartition(topic, 0, t2) for topic in topics])]
 *     rates = {topic: (o1 - (o1 if o2 == -1 else o2)) / dt_secs for topic, o1, o2 in zip(topics, off1, off2)}
 *
 *     with open('topic_rates.json', 'w') as f:
 *         json.dump(rates, f)
 *
 */

export const triggerRate: Record<string, number> = {
  'gcn.circulars': 8.4,
  'gcn.heartbeat': 86400,
  'gcn.classic.binary.AGILE_GRB_POS_TEST': 6.714285714285714,
  'gcn.classic.binary.AGILE_MCAL_ALERT': 0.0,
  'gcn.classic.binary.AMON_NU_EM_COINC': 0.0,
  'gcn.classic.binary.CALET_GBM_FLT_LC': 0.0,
  'gcn.classic.binary.COINCIDENCE': 0.0,
  'gcn.classic.binary.FERMI_GBM_ALERT': 0.7142857142857143,
  'gcn.classic.binary.FERMI_GBM_ALERT_INTERNAL': 0.14285714285714285,
  'gcn.classic.binary.FERMI_GBM_FIN_INTERNAL': 0.0,
  'gcn.classic.binary.FERMI_GBM_FIN_POS': 0.7142857142857143,
  'gcn.classic.binary.FERMI_GBM_FLT_INTERNAL': 0.2857142857142857,
  'gcn.classic.binary.FERMI_GBM_FLT_POS': 1.2857142857142858,
  'gcn.classic.binary.FERMI_GBM_GND_INTERNAL': 0.42857142857142855,
  'gcn.classic.binary.FERMI_GBM_GND_POS': 0.5714285714285714,
  'gcn.classic.binary.FERMI_GBM_POS_TEST': 6.571428571428571,
  'gcn.classic.binary.FERMI_GBM_SUBTHRESH': 0.0,
  'gcn.classic.binary.FERMI_LAT_MONITOR': 0.0,
  'gcn.classic.binary.FERMI_LAT_OFFLINE': 0.0,
  'gcn.classic.binary.FERMI_LAT_POS_TEST': 6.571428571428571,
  'gcn.classic.binary.FERMI_POINTDIR': 23.857142857142858,
  'gcn.classic.binary.GECAM_FLT': 0.0,
  'gcn.classic.binary.GECAM_GND': 0.0,
  'gcn.classic.binary.GRB_CNTRPART': 0.2857142857142857,
  'gcn.classic.binary.HAWC_BURST_MONITOR': 0.0,
  'gcn.classic.binary.HETE_TEST': 6.714285714285714,
  'gcn.classic.binary.ICECUBE_ASTROTRACK_BRONZE': 0.0,
  'gcn.classic.binary.ICECUBE_ASTROTRACK_GOLD': 0.0,
  'gcn.classic.binary.ICECUBE_CASCADE': 0.0,
  'gcn.classic.binary.INTEGRAL_OFFLINE': 3.857142857142857,
  'gcn.classic.binary.INTEGRAL_POINTDIR': 27.857142857142858,
  'gcn.classic.binary.INTEGRAL_REFINED': 3.857142857142857,
  'gcn.classic.binary.INTEGRAL_SPIACS': 3.857142857142857,
  'gcn.classic.binary.INTEGRAL_WAKEUP': 3.857142857142857,
  'gcn.classic.binary.INTEGRAL_WEAK': 4.428571428571429,
  'gcn.classic.binary.IPN_RAW': 0.2857142857142857,
  'gcn.classic.binary.KONUS_LC': 0.2857142857142857,
  'gcn.classic.binary.LVC_COUNTERPART': 0.0,
  'gcn.classic.binary.LVC_EARLY_WARNING': 0.0,
  'gcn.classic.binary.LVC_INITIAL': 11.714285714285714,
  'gcn.classic.binary.LVC_PRELIMINARY': 65.85714285714286,
  'gcn.classic.binary.LVC_RETRACTION': 12.285714285714286,
  'gcn.classic.binary.LVC_UPDATE': 0.14285714285714285,
  'gcn.classic.binary.MAXI_KNOWN': 0.0,
  'gcn.classic.binary.MAXI_TEST': 6.571428571428571,
  'gcn.classic.binary.MAXI_UNKNOWN': 0.0,
  'gcn.classic.binary.SK_SN': 0.0,
  'gcn.classic.binary.SNEWS': 0.0,
  'gcn.classic.binary.SWIFT_ACTUAL_POINTDIR': 93.42857142857143,
  'gcn.classic.binary.SWIFT_BAT_GRB_LC': 0.0,
  'gcn.classic.binary.SWIFT_BAT_GRB_POS_ACK': 0.0,
  'gcn.classic.binary.SWIFT_BAT_GRB_POS_TEST': 6.714285714285714,
  'gcn.classic.binary.SWIFT_BAT_QL_POS': 0.0,
  'gcn.classic.binary.SWIFT_BAT_SCALEDMAP': 0.0,
  'gcn.classic.binary.SWIFT_BAT_TRANS': 0.0,
  'gcn.classic.binary.SWIFT_FOM_OBS': 0.0,
  'gcn.classic.binary.SWIFT_POINTDIR': 0.0,
  'gcn.classic.binary.SWIFT_SC_SLEW': 0.0,
  'gcn.classic.binary.SWIFT_TOO_FOM': 1.5714285714285714,
  'gcn.classic.binary.SWIFT_TOO_SC_SLEW': 1.0,
  'gcn.classic.binary.SWIFT_UVOT_DBURST': 0.0,
  'gcn.classic.binary.SWIFT_UVOT_DBURST_PROC': 0.0,
  'gcn.classic.binary.SWIFT_UVOT_EMERGENCY': 0.0,
  'gcn.classic.binary.SWIFT_UVOT_FCHART': 0.0,
  'gcn.classic.binary.SWIFT_UVOT_FCHART_PROC': 0.0,
  'gcn.classic.binary.SWIFT_UVOT_POS': 0.0,
  'gcn.classic.binary.SWIFT_UVOT_POS_NACK': 0.0,
  'gcn.classic.binary.SWIFT_XRT_CENTROID': 0.0,
  'gcn.classic.binary.SWIFT_XRT_IMAGE': 0.0,
  'gcn.classic.binary.SWIFT_XRT_IMAGE_PROC': 0.0,
  'gcn.classic.binary.SWIFT_XRT_LC': 0.0,
  'gcn.classic.binary.SWIFT_XRT_POSITION': 0.0,
  'gcn.classic.binary.SWIFT_XRT_SPECTRUM': 0.0,
  'gcn.classic.binary.SWIFT_XRT_SPECTRUM_PROC': 0.0,
  'gcn.classic.binary.SWIFT_XRT_SPER': 0.0,
  'gcn.classic.binary.SWIFT_XRT_SPER_PROC': 0.0,
  'gcn.classic.binary.SWIFT_XRT_THRESHPIX': 0.0,
  'gcn.classic.binary.SWIFT_XRT_THRESHPIX_PROC': 0.0,
  'gcn.classic.binary.TEST_COORDS': 7.142857142857143,
  'gcn.classic.binary.UNKNOWN': 6.571428571428571,
  'gcn.classic.text.AGILE_GRB_POS_TEST': 6.714285714285714,
  'gcn.classic.text.AGILE_MCAL_ALERT': 0.0,
  'gcn.classic.text.AMON_NU_EM_COINC': 0.0,
  'gcn.classic.text.CALET_GBM_FLT_LC': 0.0,
  'gcn.classic.text.COINCIDENCE': 0.0,
  'gcn.classic.text.FERMI_GBM_ALERT': 0.7142857142857143,
  'gcn.classic.text.FERMI_GBM_ALERT_INTERNAL': 0.14285714285714285,
  'gcn.classic.text.FERMI_GBM_FIN_INTERNAL': 0.0,
  'gcn.classic.text.FERMI_GBM_FIN_POS': 0.7142857142857143,
  'gcn.classic.text.FERMI_GBM_FLT_INTERNAL': 0.2857142857142857,
  'gcn.classic.text.FERMI_GBM_FLT_POS': 1.2857142857142858,
  'gcn.classic.text.FERMI_GBM_GND_INTERNAL': 0.42857142857142855,
  'gcn.classic.text.FERMI_GBM_GND_POS': 0.5714285714285714,
  'gcn.classic.text.FERMI_GBM_POS_TEST': 6.571428571428571,
  'gcn.classic.text.FERMI_GBM_SUBTHRESH': 0.0,
  'gcn.classic.text.FERMI_LAT_MONITOR': 0.0,
  'gcn.classic.text.FERMI_LAT_OFFLINE': 0.0,
  'gcn.classic.text.FERMI_LAT_POS_TEST': 6.571428571428571,
  'gcn.classic.text.FERMI_POINTDIR': 23.857142857142858,
  'gcn.classic.text.GECAM_FLT': 0.0,
  'gcn.classic.text.GECAM_GND': 0.0,
  'gcn.classic.text.GRB_CNTRPART': 0.2857142857142857,
  'gcn.classic.text.HAWC_BURST_MONITOR': 0.0,
  'gcn.classic.text.HETE_TEST': 6.714285714285714,
  'gcn.classic.text.ICECUBE_ASTROTRACK_BRONZE': 0.0,
  'gcn.classic.text.ICECUBE_ASTROTRACK_GOLD': 0.0,
  'gcn.classic.text.ICECUBE_CASCADE': 0.0,
  'gcn.classic.text.INTEGRAL_OFFLINE': 3.857142857142857,
  'gcn.classic.text.INTEGRAL_POINTDIR': 27.857142857142858,
  'gcn.classic.text.INTEGRAL_REFINED': 3.857142857142857,
  'gcn.classic.text.INTEGRAL_SPIACS': 3.857142857142857,
  'gcn.classic.text.INTEGRAL_WAKEUP': 3.857142857142857,
  'gcn.classic.text.INTEGRAL_WEAK': 4.428571428571429,
  'gcn.classic.text.IPN_RAW': 0.2857142857142857,
  'gcn.classic.text.KONUS_LC': 0.2857142857142857,
  'gcn.classic.text.LVC_COUNTERPART': 0.0,
  'gcn.classic.text.LVC_EARLY_WARNING': 0.0,
  'gcn.classic.text.LVC_INITIAL': 11.714285714285714,
  'gcn.classic.text.LVC_PRELIMINARY': 65.85714285714286,
  'gcn.classic.text.LVC_RETRACTION': 12.285714285714286,
  'gcn.classic.text.LVC_UPDATE': 0.14285714285714285,
  'gcn.classic.text.MAXI_KNOWN': 0.0,
  'gcn.classic.text.MAXI_TEST': 6.571428571428571,
  'gcn.classic.text.MAXI_UNKNOWN': 0.0,
  'gcn.classic.text.SK_SN': 0.0,
  'gcn.classic.text.SNEWS': 0.0,
  'gcn.classic.text.SWIFT_ACTUAL_POINTDIR': 93.42857142857143,
  'gcn.classic.text.SWIFT_BAT_GRB_LC': 0.0,
  'gcn.classic.text.SWIFT_BAT_GRB_POS_ACK': 0.0,
  'gcn.classic.text.SWIFT_BAT_GRB_POS_TEST': 6.714285714285714,
  'gcn.classic.text.SWIFT_BAT_QL_POS': 0.0,
  'gcn.classic.text.SWIFT_BAT_SCALEDMAP': 0.0,
  'gcn.classic.text.SWIFT_BAT_TRANS': 0.0,
  'gcn.classic.text.SWIFT_FOM_OBS': 0.0,
  'gcn.classic.text.SWIFT_POINTDIR': 0.0,
  'gcn.classic.text.SWIFT_SC_SLEW': 0.0,
  'gcn.classic.text.SWIFT_TOO_FOM': 1.5714285714285714,
  'gcn.classic.text.SWIFT_TOO_SC_SLEW': 1.0,
  'gcn.classic.text.SWIFT_UVOT_DBURST': 0.0,
  'gcn.classic.text.SWIFT_UVOT_DBURST_PROC': 0.0,
  'gcn.classic.text.SWIFT_UVOT_EMERGENCY': 0.0,
  'gcn.classic.text.SWIFT_UVOT_FCHART': 0.0,
  'gcn.classic.text.SWIFT_UVOT_FCHART_PROC': 0.0,
  'gcn.classic.text.SWIFT_UVOT_POS': 0.0,
  'gcn.classic.text.SWIFT_UVOT_POS_NACK': 0.0,
  'gcn.classic.text.SWIFT_XRT_CENTROID': 0.0,
  'gcn.classic.text.SWIFT_XRT_IMAGE': 0.0,
  'gcn.classic.text.SWIFT_XRT_IMAGE_PROC': 0.0,
  'gcn.classic.text.SWIFT_XRT_LC': 0.0,
  'gcn.classic.text.SWIFT_XRT_POSITION': 0.0,
  'gcn.classic.text.SWIFT_XRT_SPECTRUM': 0.0,
  'gcn.classic.text.SWIFT_XRT_SPECTRUM_PROC': 0.0,
  'gcn.classic.text.SWIFT_XRT_SPER': 0.0,
  'gcn.classic.text.SWIFT_XRT_SPER_PROC': 0.0,
  'gcn.classic.text.SWIFT_XRT_THRESHPIX': 0.0,
  'gcn.classic.text.SWIFT_XRT_THRESHPIX_PROC': 0.0,
  'gcn.classic.text.TEST_COORDS': 7.142857142857143,
  'gcn.classic.text.UNKNOWN': 6.571428571428571,
  'gcn.classic.voevent.AGILE_GRB_POS_TEST': 6.714285714285714,
  'gcn.classic.voevent.AGILE_MCAL_ALERT': 0.0,
  'gcn.classic.voevent.AMON_NU_EM_COINC': 0.0,
  'gcn.classic.voevent.CALET_GBM_FLT_LC': 0.0,
  'gcn.classic.voevent.COINCIDENCE': 0.0,
  'gcn.classic.voevent.FERMI_GBM_ALERT': 0.7142857142857143,
  'gcn.classic.voevent.FERMI_GBM_ALERT_INTERNAL': 0.14285714285714285,
  'gcn.classic.voevent.FERMI_GBM_FIN_INTERNAL': 0.0,
  'gcn.classic.voevent.FERMI_GBM_FIN_POS': 0.7142857142857143,
  'gcn.classic.voevent.FERMI_GBM_FLT_INTERNAL': 0.2857142857142857,
  'gcn.classic.voevent.FERMI_GBM_FLT_POS': 1.2857142857142858,
  'gcn.classic.voevent.FERMI_GBM_GND_INTERNAL': 0.42857142857142855,
  'gcn.classic.voevent.FERMI_GBM_GND_POS': 0.5714285714285714,
  'gcn.classic.voevent.FERMI_GBM_POS_TEST': 6.571428571428571,
  'gcn.classic.voevent.FERMI_GBM_SUBTHRESH': 0.0,
  'gcn.classic.voevent.FERMI_LAT_MONITOR': 0.0,
  'gcn.classic.voevent.FERMI_LAT_OFFLINE': 0.0,
  'gcn.classic.voevent.FERMI_LAT_POS_TEST': 6.571428571428571,
  'gcn.classic.voevent.FERMI_POINTDIR': 23.857142857142858,
  'gcn.classic.voevent.GECAM_FLT': 0.0,
  'gcn.classic.voevent.GECAM_GND': 0.0,
  'gcn.classic.voevent.GRB_CNTRPART': 0.2857142857142857,
  'gcn.classic.voevent.HAWC_BURST_MONITOR': 0.0,
  'gcn.classic.voevent.HETE_TEST': 6.714285714285714,
  'gcn.classic.voevent.ICECUBE_ASTROTRACK_BRONZE': 0.0,
  'gcn.classic.voevent.ICECUBE_ASTROTRACK_GOLD': 0.0,
  'gcn.classic.voevent.ICECUBE_CASCADE': 0.0,
  'gcn.classic.voevent.INTEGRAL_OFFLINE': 3.857142857142857,
  'gcn.classic.voevent.INTEGRAL_POINTDIR': 27.857142857142858,
  'gcn.classic.voevent.INTEGRAL_REFINED': 3.857142857142857,
  'gcn.classic.voevent.INTEGRAL_SPIACS': 3.857142857142857,
  'gcn.classic.voevent.INTEGRAL_WAKEUP': 3.857142857142857,
  'gcn.classic.voevent.INTEGRAL_WEAK': 4.428571428571429,
  'gcn.classic.voevent.IPN_RAW': 0.2857142857142857,
  'gcn.classic.voevent.KONUS_LC': 0.2857142857142857,
  'gcn.classic.voevent.LVC_COUNTERPART': 0.0,
  'gcn.classic.voevent.LVC_EARLY_WARNING': 0.0,
  'gcn.classic.voevent.LVC_INITIAL': 11.714285714285714,
  'gcn.classic.voevent.LVC_PRELIMINARY': 65.85714285714286,
  'gcn.classic.voevent.LVC_RETRACTION': 12.285714285714286,
  'gcn.classic.voevent.LVC_UPDATE': 0.14285714285714285,
  'gcn.classic.voevent.MAXI_KNOWN': 0.0,
  'gcn.classic.voevent.MAXI_TEST': 6.571428571428571,
  'gcn.classic.voevent.MAXI_UNKNOWN': 0.0,
  'gcn.classic.voevent.SK_SN': 0.0,
  'gcn.classic.voevent.SNEWS': 0.0,
  'gcn.classic.voevent.SWIFT_ACTUAL_POINTDIR': 93.42857142857143,
  'gcn.classic.voevent.SWIFT_BAT_GRB_LC': 0.0,
  'gcn.classic.voevent.SWIFT_BAT_GRB_POS_ACK': 0.0,
  'gcn.classic.voevent.SWIFT_BAT_GRB_POS_TEST': 6.714285714285714,
  'gcn.classic.voevent.SWIFT_BAT_QL_POS': 0.0,
  'gcn.classic.voevent.SWIFT_BAT_SCALEDMAP': 0.0,
  'gcn.classic.voevent.SWIFT_BAT_TRANS': 0.0,
  'gcn.classic.voevent.SWIFT_FOM_OBS': 0.0,
  'gcn.classic.voevent.SWIFT_POINTDIR': 0.0,
  'gcn.classic.voevent.SWIFT_SC_SLEW': 0.0,
  'gcn.classic.voevent.SWIFT_TOO_FOM': 1.5714285714285714,
  'gcn.classic.voevent.SWIFT_TOO_SC_SLEW': 1.0,
  'gcn.classic.voevent.SWIFT_UVOT_DBURST': 0.0,
  'gcn.classic.voevent.SWIFT_UVOT_DBURST_PROC': 0.0,
  'gcn.classic.voevent.SWIFT_UVOT_EMERGENCY': 0.0,
  'gcn.classic.voevent.SWIFT_UVOT_FCHART': 0.0,
  'gcn.classic.voevent.SWIFT_UVOT_FCHART_PROC': 0.0,
  'gcn.classic.voevent.SWIFT_UVOT_POS': 0.0,
  'gcn.classic.voevent.SWIFT_UVOT_POS_NACK': 0.0,
  'gcn.classic.voevent.SWIFT_XRT_CENTROID': 0.0,
  'gcn.classic.voevent.SWIFT_XRT_IMAGE': 0.0,
  'gcn.classic.voevent.SWIFT_XRT_IMAGE_PROC': 0.0,
  'gcn.classic.voevent.SWIFT_XRT_LC': 0.0,
  'gcn.classic.voevent.SWIFT_XRT_POSITION': 0.0,
  'gcn.classic.voevent.SWIFT_XRT_SPECTRUM': 0.0,
  'gcn.classic.voevent.SWIFT_XRT_SPECTRUM_PROC': 0.0,
  'gcn.classic.voevent.SWIFT_XRT_SPER': 0.0,
  'gcn.classic.voevent.SWIFT_XRT_SPER_PROC': 0.0,
  'gcn.classic.voevent.SWIFT_XRT_THRESHPIX': 0.0,
  'gcn.classic.voevent.SWIFT_XRT_THRESHPIX_PROC': 0.0,
  'gcn.classic.voevent.TEST_COORDS': 7.142857142857143,
  'gcn.classic.voevent.UNKNOWN': 6.571428571428571,
  'gcn.notices.icecube.lvk_nu_track_search': 9.285714285714286,
  'gcn.notices.icecube.test.gold_bronze_track_alerts': 23.857142857142858,
  'gcn.notices.swift.bat.guano': 0.0,
  'igwn.gwalert': 90.42857142857143,
  'gcn.notices.einstein_probe.wxt.alert': 0.27,
  'gcn.notices.svom': 0,
}
