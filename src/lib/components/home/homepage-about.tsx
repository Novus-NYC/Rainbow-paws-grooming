import Image from "next/image"
import Link from "next/link"
import type { CSSProperties } from "react"
import { BoneDoodle, BurstDoodle, PawPrint } from "@/lib/components/visuals/photo-accents"

type HomepageAboutProps = {
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: string;
  meetHref?: string;
  bookHref?: string;
};

const ABOUT_BLOB_PATH =
  "M0.943 0.500 L0.944 0.509 L0.944 0.517 L0.943 0.526 L0.941 0.534 L0.937 0.543 L0.933 0.551 L0.929 0.559 L0.925 0.567 L0.923 0.575 L0.921 0.583 L0.920 0.591 L0.919 0.600 L0.918 0.608 L0.916 0.616 L0.913 0.624 L0.910 0.632 L0.907 0.640 L0.904 0.648 L0.902 0.657 L0.901 0.665 L0.901 0.675 L0.900 0.684 L0.899 0.693 L0.897 0.702 L0.894 0.711 L0.890 0.719 L0.886 0.727 L0.882 0.735 L0.878 0.743 L0.875 0.752 L0.872 0.761 L0.869 0.771 L0.866 0.781 L0.862 0.790 L0.857 0.798 L0.850 0.805 L0.842 0.811 L0.834 0.816 L0.825 0.821 L0.817 0.826 L0.809 0.832 L0.802 0.838 L0.796 0.845 L0.789 0.853 L0.782 0.859 L0.774 0.865 L0.765 0.869 L0.755 0.872 L0.745 0.875 L0.735 0.877 L0.725 0.879 L0.715 0.882 L0.707 0.885 L0.698 0.890 L0.690 0.895 L0.681 0.900 L0.672 0.903 L0.663 0.906 L0.653 0.907 L0.643 0.907 L0.633 0.907 L0.622 0.906 L0.613 0.906 L0.603 0.906 L0.593 0.907 L0.584 0.909 L0.575 0.910 L0.566 0.911 L0.556 0.912 L0.547 0.911 L0.537 0.911 L0.528 0.910 L0.519 0.910 L0.509 0.910 L0.500 0.911 L0.491 0.912 L0.481 0.915 L0.472 0.918 L0.462 0.922 L0.452 0.925 L0.442 0.929 L0.431 0.931 L0.421 0.933 L0.411 0.934 L0.400 0.934 L0.390 0.933 L0.381 0.931 L0.371 0.927 L0.362 0.924 L0.353 0.920 L0.343 0.917 L0.333 0.915 L0.323 0.914 L0.312 0.914 L0.300 0.915 L0.289 0.915 L0.278 0.915 L0.267 0.913 L0.257 0.910 L0.248 0.904 L0.240 0.898 L0.232 0.890 L0.225 0.883 L0.218 0.876 L0.210 0.869 L0.202 0.864 L0.193 0.859 L0.184 0.854 L0.175 0.849 L0.166 0.843 L0.159 0.836 L0.152 0.829 L0.145 0.822 L0.138 0.814 L0.131 0.807 L0.124 0.800 L0.116 0.794 L0.108 0.787 L0.100 0.781 L0.093 0.774 L0.087 0.766 L0.081 0.758 L0.076 0.749 L0.072 0.740 L0.067 0.732 L0.061 0.723 L0.055 0.716 L0.048 0.708 L0.041 0.700 L0.035 0.692 L0.029 0.683 L0.025 0.674 L0.023 0.664 L0.021 0.655 L0.019 0.645 L0.017 0.635 L0.015 0.626 L0.015 0.617 L0.015 0.608 L0.015 0.599 L0.015 0.590 L0.015 0.580 L0.015 0.570 L0.015 0.560 L0.015 0.550 L0.015 0.540 L0.015 0.530 L0.015 0.520 L0.015 0.510 L0.015 0.500 L0.015 0.490 L0.015 0.480 L0.015 0.470 L0.015 0.460 L0.015 0.450 L0.015 0.441 L0.015 0.432 L0.015 0.423 L0.017 0.415 L0.023 0.406 L0.029 0.398 L0.034 0.389 L0.038 0.381 L0.043 0.372 L0.049 0.364 L0.056 0.357 L0.064 0.350 L0.072 0.343 L0.080 0.336 L0.087 0.330 L0.094 0.323 L0.101 0.317 L0.107 0.310 L0.113 0.303 L0.119 0.296 L0.125 0.290 L0.132 0.284 L0.140 0.279 L0.149 0.274 L0.158 0.270 L0.168 0.267 L0.178 0.263 L0.187 0.261 L0.197 0.258 L0.206 0.255 L0.214 0.251 L0.221 0.247 L0.227 0.242 L0.232 0.236 L0.237 0.229 L0.241 0.222 L0.245 0.215 L0.250 0.207 L0.255 0.201 L0.262 0.196 L0.269 0.192 L0.277 0.189 L0.285 0.186 L0.292 0.183 L0.300 0.179 L0.306 0.173 L0.311 0.166 L0.317 0.158 L0.322 0.149 L0.327 0.140 L0.333 0.132 L0.339 0.124 L0.346 0.118 L0.354 0.112 L0.362 0.107 L0.370 0.101 L0.378 0.096 L0.386 0.089 L0.394 0.083 L0.403 0.077 L0.412 0.071 L0.421 0.066 L0.430 0.062 L0.440 0.060 L0.450 0.058 L0.460 0.056 L0.470 0.053 L0.480 0.051 L0.490 0.048 L0.500 0.044 L0.510 0.041 L0.521 0.040 L0.531 0.039 L0.542 0.040 L0.552 0.041 L0.562 0.043 L0.573 0.045 L0.583 0.046 L0.594 0.045 L0.605 0.044 L0.616 0.043 L0.627 0.042 L0.638 0.043 L0.649 0.044 L0.659 0.048 L0.668 0.052 L0.678 0.057 L0.687 0.062 L0.697 0.067 L0.707 0.070 L0.717 0.073 L0.728 0.075 L0.739 0.077 L0.750 0.080 L0.760 0.083 L0.769 0.089 L0.778 0.095 L0.786 0.102 L0.794 0.109 L0.802 0.115 L0.811 0.121 L0.820 0.126 L0.831 0.130 L0.841 0.134 L0.852 0.138 L0.862 0.143 L0.871 0.149 L0.879 0.156 L0.887 0.164 L0.894 0.172 L0.901 0.180 L0.908 0.188 L0.915 0.196 L0.922 0.203 L0.929 0.211 L0.935 0.220 L0.941 0.229 L0.945 0.238 L0.948 0.249 L0.950 0.259 L0.951 0.270 L0.952 0.281 L0.952 0.292 L0.953 0.303 L0.953 0.313 L0.954 0.323 L0.956 0.333 L0.958 0.342 L0.960 0.352 L0.963 0.361 L0.966 0.370 L0.968 0.379 L0.969 0.388 L0.970 0.398 L0.969 0.408 L0.966 0.418 L0.962 0.428 L0.956 0.438 L0.951 0.447 L0.946 0.457 L0.942 0.466 L0.940 0.474 L0.940 0.483 L0.941 0.491Z";

type DoodleKind = "burst" | "bone" | "paw"

type DoodleDecoration = {
  kind: DoodleKind
  color: string
  className: string
  style: CSSProperties
}

const DOODLE_COMPONENTS = {
  burst: BurstDoodle,
  bone: BoneDoodle,
  paw: PawPrint,
} as const

const DOODLES: DoodleDecoration[] = [
  {
    kind: "burst" as const,
    color: "#f7c948",
    className: "rp-home-about__doodle--burst",
    style: { left: "10%", top: "-2%", width: "11%", transform: "rotate(-80deg)" },
  },
  {
    kind: "bone" as const,
    color: "var(--deep)",
    className: "rp-home-about__doodle--bone",
    style: { left: "-9%", bottom: "4%", width: "17%", transform: "rotate(25deg)" },
  },
  {
    kind: "paw" as const,
    color: "#44b7bb",
    className: "rp-home-about__doodle--paw-one",
    style: { right: "8%", top: "-8%", width: "9%", transform: "rotate(12deg)" },
  },
  {
    kind: "paw" as const,
    color: "#44b7bb",
    className: "rp-home-about__doodle--paw-two",
    style: { right: "-2%", top: "10%", width: "7%", transform: "rotate(-10deg)" },
  },
];

export default function HomepageAbout({
  imageSrc,
  imageAlt = "A groomer gently giving a dog a treat in her home studio",
  imagePosition = "50% 50%",
  meetHref = "#about",
  bookHref = "#contact",
}: HomepageAboutProps) {
  return (
    <section className="rp-home-about" id="about" aria-labelledby="rp-home-about-title">
      <svg className="rp-home-about__svg-defs" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="rp-home-about-blob" clipPathUnits="objectBoundingBox">
            <path d={ABOUT_BLOB_PATH} />
          </clipPath>
        </defs>
      </svg>

      <div className="rp-home-about__inner">
        <div className="rp-home-about__visual">
          <div className="rp-home-about__photo">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 560px) calc(100vw - 64px), (max-width: 980px) 420px, 540px"
              loading="lazy"
              style={{ objectPosition: imagePosition }}
            />
          </div>

          {DOODLES.map((doodle) => {
            const DoodleIcon = DOODLE_COMPONENTS[doodle.kind]

            return (
              <span
                key={doodle.className}
                className={`rp-home-about__doodle ${doodle.className}`}
                style={{ ...doodle.style, color: doodle.color }}
              >
                <DoodleIcon />
              </span>
            )
          })}

          <span className="rp-home-about__sticker">home studio, Brooklyn</span>
        </div>

        <div className="rp-home-about__copy">
          <h2 id="rp-home-about-title">
            We adjust the groom to your dog, not the other way around.
          </h2>

          <p>
            Not every dog thrives in a busy salon, and not every groomer has the
            patience for a dog who needs more. Rainbow Paws is a private studio
            inside a Brooklyn home, built for dogs who have been overlooked,
            turned away, or misunderstood.
          </p>

          <p>
            With 16+ years of grooming and a veterinary technician background,
            the focus is on senior, medically compromised, fearful, and
            first-time dogs.
          </p>

          <div className="rp-home-about__actions">
            <Link className="rp-home-about__button" href={meetHref}>
              Meet Wynter
            </Link>
            <Link
              className="rp-home-about__button rp-home-about__button--outline"
              href={bookHref}
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

