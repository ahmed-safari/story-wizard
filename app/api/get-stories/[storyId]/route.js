export const GET = async (req, { params }) => {
  let stories = [];

  try {
    const response = await fetch(
      "https://www.instagram.com/api/v1/feed/reels_media/?reel_ids=30768275018",
      {
        cache: "no-store",
        headers: {
          "x-asbd-id": "129477",
          "x-csrftoken": "Q3GNeqGo9GEJNQyjzVHzOInAJfA8Da3x",
          "x-ig-app-id": "1217981644879628",

          "x-requested-with": "XMLHttpRequest",
          cookie:
            'mid=XThjUgAEAAECARI9k0sN2hkKSqPK; ig_did=DC013DEE-CF06-4F7F-B07E-1E16DF584102; fbm_124024574287414=base_domain=.instagram.com; ds_user_id=44583139229; csrftoken=Q3GNeqGo9GEJNQyjzVHzOInAJfA8Da3x; datr=ng-iYnEPvFlIblZydecqzmoR; shbid="13619\\05444583139229\\0541719449306:01f7883f71950a6076ff678013599be54ccd9993cb8563d5c18a881558e9683b6542640c"; shbts="1687913306\\05444583139229\\0541719449306:01f73269aea1fae80d8817781fe871381225529b835fa71b533e8070ef7ea84eb7f5d3dc"; sessionid=44583139229%3AYZCg8lWHRYLUSt%3A17%3AAYcUm0kcZ0GLf76R_sP6q6bO3ja1nkfgV_jEsxUCoQ; fbsr_124024574287414=gqmRH62hYHxfsufKquprhHHggno27Rgefw4dDlP99ck.eyJ1c2VyX2lkIjoiMTAwMDM1MTgwMjMxNTE5IiwiY29kZSI6IkFRRGpUdkxiNHpKRncybzJaS1RNTjN6anpPQW14TWhUWS0wbXZXVm1uZUxmVmh2ZzlMc0NMS2ZoNmI4bUNxakhCQW0xczBpTUo0UWwtUWVNMVVpUUZYUEhaV2h4UXhjejVEZmN4M1hVdndtQVJxRjIySkc2SDgwS25lYU81Ri02SXVpWW1xMm1nQTFBc3RNV1JHYTlYbnR3WTBlTF96R1Y5a09yWVhpT0VZYjZvV3FOQWpnOWluVWRwMU9qUTI0VmRxQlkxdjdkYUtLYUQxWmFSNEROU1N1NHNhQVBseERGZVlqRWwzOXNodDhhV056dlRja1ZQLTMtS3lxY3IxdkFkM3Y0S2RhRm04VDJLZ0Q4WlFFbmtHVGVpQUtNREdmN1lwSWRuSFhhUlVBRVdFdHZGRDVhbTQzV2hmb2M2ajhXeFlyeTNHbHYyX2tNUWRfRkYzcF9YUzBZIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUdHT0RtaVh6WTZvMFZranZaQ2FsT0NEN1pBN3Exdnc2T2h0ZDJlU0x3NkxWUnVnS0twRFI5YWZNekNRQ2NtZVpDZmVScUhES0NrOXhCVWVKOUxqU0xuS1Y3MTJkU1RaQzRBdzVQYnRicFU4Y0lYTTZjNkFZUEZWQU10ZUJ5T3VjNVpCRmRGWWVmVEdwTUxhOFpCb2hwQ05DMkhvbnZnY3JzZ2VrVkJnTmo3Zm1xRmNuTHBOdFd0U0lZYWszaHhRWkRaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjg4MDM4OTE4fQ; dpr=3; fbsr_124024574287414=gqmRH62hYHxfsufKquprhHHggno27Rgefw4dDlP99ck.eyJ1c2VyX2lkIjoiMTAwMDM1MTgwMjMxNTE5IiwiY29kZSI6IkFRRGpUdkxiNHpKRncybzJaS1RNTjN6anpPQW14TWhUWS0wbXZXVm1uZUxmVmh2ZzlMc0NMS2ZoNmI4bUNxakhCQW0xczBpTUo0UWwtUWVNMVVpUUZYUEhaV2h4UXhjejVEZmN4M1hVdndtQVJxRjIySkc2SDgwS25lYU81Ri02SXVpWW1xMm1nQTFBc3RNV1JHYTlYbnR3WTBlTF96R1Y5a09yWVhpT0VZYjZvV3FOQWpnOWluVWRwMU9qUTI0VmRxQlkxdjdkYUtLYUQxWmFSNEROU1N1NHNhQVBseERGZVlqRWwzOXNodDhhV056dlRja1ZQLTMtS3lxY3IxdkFkM3Y0S2RhRm04VDJLZ0Q4WlFFbmtHVGVpQUtNREdmN1lwSWRuSFhhUlVBRVdFdHZGRDVhbTQzV2hmb2M2ajhXeFlyeTNHbHYyX2tNUWRfRkYzcF9YUzBZIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUdHT0RtaVh6WTZvMFZranZaQ2FsT0NEN1pBN3Exdnc2T2h0ZDJlU0x3NkxWUnVnS0twRFI5YWZNekNRQ2NtZVpDZmVScUhES0NrOXhCVWVKOUxqU0xuS1Y3MTJkU1RaQzRBdzVQYnRicFU4Y0lYTTZjNkFZUEZWQU10ZUJ5T3VjNVpCRmRGWWVmVEdwTUxhOFpCb2hwQ05DMkhvbnZnY3JzZ2VrVkJnTmo3Zm1xRmNuTHBOdFd0U0lZYWszaHhRWkRaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjg4MDM4OTE4fQ; rur="LDC\\05444583139229\\0541719574965:01f7f41f2a6ac081b6de89bcde6a1759e4d867fd14604ca2bb05f80b8506f34e4b640cea"',
          Referer: "https://www.instagram.com/",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: null,
        method: "GET",
      }
    );
    console.log("Status:", response.status);
    const data = await response.json();
    console.log(data.reels_media[0].items.length);
    if (data.reels_media.length === 0) {
      return new Response(JSON.stringify({ message: "No Stories Found" }), {
        status: 404,
      });
    }
    data.reels_media[0].items.forEach((item) => {
      let mentions = [];
      const {
        code,
        media_type,
        accessibility_caption,
        taken_at,
        story_quizs,
        story_bloks_stickers,
      } = item;

      // console.log("story_quiz:", story_quizs)
      let question = null;
      let correctAnswer = null;
      let correctAnswerText = null;
      // Get quiz question and answer
      if (story_quizs) {
        // console.log(story_quizs);
        question = story_quizs[0].quiz_sticker.question;
        correctAnswer = story_quizs[0].quiz_sticker.correct_answer;
        correctAnswerText =
          story_quizs[0].quiz_sticker.tallies[correctAnswer].text;
      }
      // Get mentions
      if (story_bloks_stickers) {
        mentions = story_bloks_stickers.map((mention) => {
          const { bloks_sticker_type, sticker_data } = mention.bloks_sticker;

          if (bloks_sticker_type === "mention") {
            return {
              username: sticker_data.ig_mention.username,
              profilePicUrl: sticker_data.ig_mention.profile_pic_url,
            };
          }
        });
      }
      stories.push({
        code,
        taken_at,
        expiry: item.expiring_at,
        media_type,
        accessibility_caption,
        imageUrl: item.image_versions2.candidates[0].url,
        videoUrl: media_type === 2 ? item.video_versions[0].url : null,
        question,
        correctAnswer,
        correctAnswerText,
        mentions,
      });
    });

    // console.log(data);
    return new Response(JSON.stringify({ stories }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error Has Occured" }),
      { status: 500 }
    );
  }
};
